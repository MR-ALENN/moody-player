import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

function Register() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] =
  useState("")
const [showPassword, setShowPassword] =
  useState(false)


  const handleRegister = async () => {

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/register",
{
  username,
  email,
  password,
  confirmPassword,
}

      )

      alert(res.data.message)

      navigate("/")

    }
    catch (error) {

      alert(error.response.data.message)

    }

  }



  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="w-full max-w-md bg-white/10 p-8 rounded-3xl">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-black/30 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-black/30 mb-4"
        />

        <div className="relative">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    className="w-full p-4 rounded-xl bg-black/30"
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2"
  >

    {
      showPassword
        ? <EyeOff size={18} />
        : <Eye size={18} />
    }

  </button>

</div>

        <button
          onClick={handleRegister}
          className="w-full py-4 rounded-xl bg-purple-500"
        >
          Register
        </button>

      </div>

    </div>

  )

}

export default Register