import React, { useState, useEffect } from 'react'
import { Dropdown, Input } from 'semantic-ui-react';

export default function AspectRatioEdit({ setRatio }) {

  const ratios = [
    { key: 'af', value: '16:9', text: '16:9' },
    { key: 'ax', value: '4:3', text: '4:3' },
    { key: 'al', value: '1:1', text: '1:1' },
    { key: 'dz', value: '21:9', text: '21:9' },
  ]
  return (

    <Dropdown
      style={{ width: '60%' }}
      lazyLoad
      selection
      options={ratios}
      placeholder='Select Aspect Ratio'
      onChange={(e, { value }) => { setRatio(value) }}
    />
  )
}
