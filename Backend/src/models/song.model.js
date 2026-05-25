import mongoose from "mongoose"

const songSchema = new mongoose.Schema(

  {
    mood: {
      type: String,
      required: true,
    },

    confidence: {
      type: Number,
      required: true,
    },

    happy: Number,
    neutral: Number,
    surprised: Number,
  },

  {
    timestamps: true,
  }

)

const Song = mongoose.model("Song", songSchema)

export default Song