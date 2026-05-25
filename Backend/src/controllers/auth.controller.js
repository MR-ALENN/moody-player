import User from "../models/user.model.js"

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



// REGISTER
export const register = async (req, res) => {

  try {

    const {

      username,
      email,
      password,

    } = req.body


    // Check Existing User
    const existingUser =
      await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      })

    }


    // Hash Password
    const hashedPassword =
      await bcrypt.hash(password, 10)


    // Create User
    const user = await User.create({

      username,
      email,

      password: hashedPassword,

    })


    res.status(201).json({

      message: "User Registered",

      user,

    })

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}



// LOGIN
export const login = async (req, res) => {

  try {

    const {

      email,
      password,

    } = req.body


    // Find User
    const user =
      await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      })

    }


    // Compare Password
    const isMatch =
      await bcrypt.compare(

        password,
        user.password

      )

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Credentials",
      })

    }


    // JWT Token
    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    )


    res.json({

      message: "Login Successful",

      token,

      user,

    })

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}