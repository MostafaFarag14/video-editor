import React from 'react'
import { Dropdown } from 'semantic-ui-react';

export default function AspectRatioEdit({ setRatio }) {

  const ratios = [
    { value: '16:9', text: '16:9' },
    { value: '4:3', text: '4:3' },
    { value: '1:1', text: '1:1' },
    { value: '21:9', text: '21:9' },
  ]
  return (

    <Dropdown
      fluid
      selection
      defaultValue='16:9'
      options={ratios}
      placeholder='Select Aspect Ratio'
      onChange={(e, { value }) => { setRatio(value) }}
    />
  )
}
