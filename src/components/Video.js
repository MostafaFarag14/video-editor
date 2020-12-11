import React, { useEffect, useState } from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

export default function Video({ source }) {
  const [heightRatio, setHeightRatio] = useState(1)
  const [widthRatio, setWidthRatio] = useState(1)

  useEffect(() => {

  }, [heightRatio, widthRatio])

  const ratios = [
    { key: 'af', value: [16, 9], text: '16:9' },
    { key: 'ax', value: [4, 3], text: '4:3' },
    { key: 'al', value: [1, 1], text: '1:1' },
    { key: 'dz', value: [16, 10], text: '16:10' },

  ]

  return (
    <div>
      <div>
        <Dropdown
          clearable
          selection
          options={ratios}
          placeholder='Select Country'
          onChange={(e, data) => { setHeightRatio(data.value[1]); setWidthRatio(data.value[0]) }}
        />
        <Input placeholder='width' onChange={(e, { value }) => { setWidthRatio(value) }} />
        <Input placeholder='height' onChange={(e, { value }) => { setHeightRatio(value) }} />
      </div>
      <video style={{ maxWidth: 720 }} height={720 * (heightRatio / widthRatio)} controls src={source} />
    </div>
  )
}
