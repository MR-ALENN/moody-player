import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import songRoutes from "./routes/song.routes.js"

const app = express()

app.use(cors())

app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/songs", songRoutes)


app.get("/", (req, res) => {

  res.send("Moody Backend Running 🚀")

})

export default app