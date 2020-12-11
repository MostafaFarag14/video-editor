import FileInput from "./components/FileInput";
import { useEffect, useRef } from "react";

export default function App() {
  const canvasRef = useRef(null)
  // 
  // const video = new vd.layer
  // console.log(video)
  useEffect(() => {
    const canvas = canvasRef.current
    var ctx = canvas.getContext('2d')
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 0, 50);
    console.log(canvas)
  })
  return (
    <div>
      <FileInput />
      <canvas ref={canvasRef} height="720" width="1000" id='can' style={{ border: '1px solid #000000', position: 'absolute' }}></canvas>
      {/* <VideoEdit /> */}
      {/* <EditUsingEditly /> */}
    </div>
  )
}
