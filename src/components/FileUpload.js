import React, { useEffect, useRef, useState } from 'react'
import { Button, Header } from 'semantic-ui-react'

export default function FileUpload({ setVideoSource }) {
  const [file, setFile] = useState(null)
  const fileInput = useRef()
  const [validationMessage, SetValidationMessage] = useState('')
  
  const readFile = file => {
    var fileURL = URL.createObjectURL(file)
    setVideoSource(fileURL)
  }

  const onChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    if (file) {
      const fileSize = parseInt(file.size / (1024 * 1024))
      const fileType = file.type
      if (fileSize > 500 || fileType !== 'video/mp4') {
        SetValidationMessage('Video extension must be MP4 with max size 500 Mb')
      }
      else {
        SetValidationMessage('')
        readFile(file)
      }
    }
  }, [file])

  return (
    <>
      <input ref={fileInput} style={{ display: 'none' }} type='file' onChange={onChange} />
      <Button size='large' icon='upload' onClick={() => fileInput.current.click()} content='UPLOAD FILE' />
      { validationMessage.length !== 0 && <Header color='red' content={validationMessage} />}
    </>
  )
}
