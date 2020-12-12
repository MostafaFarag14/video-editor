import React, { useState } from 'react'
import { Container, Embed, Input } from 'semantic-ui-react'
import { getVideoId } from '../utils/helpers'
import VideoText from './VideoText'

export default function UrlVideoPage({ ratio, textColor }) {
  const [id, setId] = useState('')
  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Input fluid label='URL' placeholder='mysite.com' onChange={(e, { value }) => {
          setId(getVideoId(value))
        }} />
        <VideoText textColor={textColor} />
        <Embed
          aspectRatio={ratio === '1:1' ? '16:9' : ratio}
          id={id}
          source='youtube'
        />
      </Container>
    </>
  )
}
