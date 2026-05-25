import express from "express"

import {

  createSong,
  getSongs,
  getSong,
  updateSong,
  deleteSong,

} from "../controllers/song.controller.js"

const router = express.Router()


// CREATE
router.post("/", createSong)


// READ ALL
router.get("/", getSongs)


// READ SINGLE
router.get("/:id", getSong)


// UPDATE
router.put("/:id", updateSong)


// DELETE
router.delete("/:id", deleteSong)


export default router