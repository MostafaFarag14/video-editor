import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function VideoText({ textColor }) {
  const [text, setText] = useState('Add Draggable Text')
  return (
    <Draggable bounds='parent' >
      <input color={textColor} placeholder='Sample Text' onChange={((e) => { setText(e.target.value) })}
        style={{ position: 'relative', zIndex: 5, color: textColor, fontSize: 25, background: 'rgba(0,0,0,0)', border: 'none', width: '25%' }} value={text}></input>
    </Draggable>
  )
}
