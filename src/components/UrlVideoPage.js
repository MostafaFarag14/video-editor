import React, { useState } from 'react'
import { Embed, Input } from 'semantic-ui-react'
import { getVideoId } from '../utils/helpers'

export default function UrlVideoPage({ ratio }) {
  const [id, setId] = useState('')
  return (
    <>
      <Input fluid label='URL' placeholder='mysite.com' onChange={(e, { value }) => {
        setId(getVideoId(value))
      }} />
      <Embed
        aspectRatio={ratio}
        id={id}
        source='youtube'
      />
    </>
  )
}
