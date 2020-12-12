import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { Player } from 'video-react'
export default function Video({ videoSource, ratio, textColor }) {
  const [text, setText] = useState('Add Text')
  return (
    <div style={{ margin: '0px 20px',}}>
      <Draggable bounds='parent'>
        <div style={{ position: "relative", zIndex: 5, width: '25%' }}>
          <input color={textColor} placeholder='Sample Text' onChange={((e) => { setText(e.target.value) })}
            style={{ color: textColor, fontSize: 30, background: 'rgba(0,0,0,0)', border: 'none', width: '100%' }} value={text}></input>
        </div>
      </Draggable>
      <Player aspectRatio={ratio} autoPlay src={videoSource} fluid />
    </div>
  )
}
