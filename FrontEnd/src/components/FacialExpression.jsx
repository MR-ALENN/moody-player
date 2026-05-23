// import { useEffect, useRef, useState } from "react"
// import * as faceapi from "face-api.js"

// function FacialExpression() {
//   const videoRef = useRef()
// //   const [mood, setMood] = useState("Detecting...")

//   useEffect(() => {
//     startVideo()
//     loadModels()
//   }, [])

//   // Open Webcam
//   const startVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         videoRef.current.srcObject = stream
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   // Load AI Models
//   const loadModels = async () => {
//     await faceapi.nets.tinyFaceDetector.loadFromUri("/models")
//     await faceapi.nets.faceExpressionNet.loadFromUri("/models")

//     detectFace()
//   }

//   // Detect Mood
//   async function detectFace(){
//       if (videoRef.current) {
//         const detection = await faceapi
//           .detectSingleFace(
//             videoRef.current,
//             new faceapi.TinyFaceDetectorOptions()
//           )
//           .withFaceExpressions()

//         if (detection) {
//           let mostProbableExpression = 0
//           let _expression = ""

//           for (const expression of Object.keys(detection.expressions)) {
//             const score = detection.expressions[expression]
//             if (score > mostProbableExpression) {
//               mostProbableExpression = score
//               _expression = expression
//             }
//           }

//         //   setMood(_expression || "Unknown")
//           console.log(_expression)
//         }
//          else {
//           console.error("Face not detected")
//         }
//     }
//   }
//   return (
//     <>
//     <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
//       <h1 className="text-3xl mb-5">Moody Detector</h1>
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         width="500"
//         height="400"
//         className="rounded-xl border-4 border-purple-500"
//       />
//       <button className="rounded-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50" onClick={detectFace}>
//         Detect
//       </button>
//     </div>
//     </>
//   )
// }

// export default FacialExpression

import { useEffect, useRef } from "react"
import * as faceapi from "face-api.js"

function FacialExpression({ scanTrigger, onDetect }) {

  const videoRef = useRef()

  // Start Camera + Load Models
  useEffect(() => {
    startVideo()
    loadModels()
  }, [])

  // Trigger Detection from Scan.jsx button
  useEffect(() => {

    if (scanTrigger) {
      detectFace()
    }

  }, [scanTrigger])

  // Open Webcam
  const startVideo = () => {

    navigator.mediaDevices
      .getUserMedia({ video: true })

      .then((stream) => {
        videoRef.current.srcObject = stream
      })

      .catch((err) => {
        console.log(err)
      })

  }

  // Load Models
  const loadModels = async () => {

    await faceapi.nets.tinyFaceDetector.loadFromUri("/models")

    await faceapi.nets.faceExpressionNet.loadFromUri("/models")

    console.log("Models Loaded ✅")

  }

  // Detect Face
  async function detectFace() {

    if (!videoRef.current) return

    const detection = await faceapi
      .detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions()

    if (detection) {

      let mostProbableExpression = 0
      let _expression = ""

      for (const expression of Object.keys(detection.expressions)) {

        const score = detection.expressions[expression]

        if (score > mostProbableExpression) {

          mostProbableExpression = score
          _expression = expression

        }

      }

      console.log(_expression)

      // Send Data to Scan.jsx
      onDetect({
        mood: _expression,
        confidence: Math.round(
          mostProbableExpression * 100
        ),
        expressions: detection.expressions,
      })

    }

    else {

      console.error("Face not detected")

    }

  }

  return (

    <div className="w-full h-full bg-black relative">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />

    </div>

  )

}

export default FacialExpression