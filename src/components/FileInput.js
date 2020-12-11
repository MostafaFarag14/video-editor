import React, { useEffect, useState } from 'react'
import TextEdit from "./TextEdit";
import Video from './Video'

export default function FileInput() {
  const [file, setFile] = useState(null)
  const [source, setSource] = useState()


  const readFile = file => {
    const reader = new FileReader()
    reader.onload = () => {
      setSource(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const onChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    file && readFile(file)
  }, [file])
  return (
    <div style={{ textAlign: 'center' }}>
      <input type='file' onChange={onChange} />
      {
        source === undefined || file === null ?
          <p>loading</p>
          :
          <div>
            <TextEdit />
            <Video source={source} />
          </div>
      }

    </div>
  )
}
