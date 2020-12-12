import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'

export default function FileInput({ setVideoSource }) {
  const [file, setFile] = useState(null)
  const history = useHistory()
  const fileInput = useRef()

  const readFile = file => {
    var fileURL = URL.createObjectURL(file)
    setVideoSource(fileURL)
  }

  const onChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    file && readFile(file)
  }, [file])

  return (
    <>
      <input ref={fileInput} style={{ display: 'none' }} type='file' onChange={onChange} />
      <Button size='large' icon='upload' onClick={() => fileInput.current.click()} content='UPLOAD FILE' />
    </>
  )
}
