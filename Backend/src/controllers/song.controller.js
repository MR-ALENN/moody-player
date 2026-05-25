import Song from "../models/song.model.js"



// CREATE
export const createSong = async (req, res) => {

  try {

      console.log(req.body)
    const song = await Song.create(req.body)

    res.status(201).json(song)

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}



// READ ALL
export const getSongs = async (req, res) => {

  try {

    const songs = await Song.find()

    res.json(songs)

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}



// READ SINGLE
export const getSong = async (req, res) => {

  try {

    const song =
      await Song.findById(req.params.id)

    res.json(song)

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}



// UPDATE
export const updateSong = async (req, res) => {

  try {

    const updatedSong =
      await Song.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true,
        }

      )

    res.json(updatedSong)

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}



// DELETE
export const deleteSong = async (req, res) => {

  try {

    await Song.findByIdAndDelete(req.params.id)

    res.json({
      message: "Deleted Successfully",
    })

  }
  catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}   