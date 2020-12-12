import React, { useState } from 'react'
import { Input, TextArea } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import { CirclePicker } from 'react-color'
export default function TextEdit({setTextColor}) {

  return (
    <div>
      <CirclePicker onChange={(color, event) => setTextColor(color.hex)} />
    </div >
  )
}
