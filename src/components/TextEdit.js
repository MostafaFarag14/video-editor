import React, { useState } from 'react'
import { Input, TextArea } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import { CirclePicker } from 'react-color'
export default function TextEdit() {
  const [text, setText] = useState('add text')
  const [textColor, setTextColor] = useState('yellow')
  return (
    <div>
      <CirclePicker onChange={(color, event) => setTextColor(color.hex)} />
      <Draggable defaultPosition={{ x: 0, y: 0 }}
        position={null}>
        <div style={{ position: "relative", zIndex: 5 }}>
          <input color={textColor} placeholder='fdfd' onChange={((e) => { setText(e.target.value) })}
            style={{ color: textColor , fontSize: 50, background: 'rgba(0,0,0,0)', border: 'none' }} value={text}></input>
        </div>
      </Draggable>
    </div >
  )
}
