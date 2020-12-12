import React, { useContext, useState } from 'react'
import { Container, Embed, Input } from 'semantic-ui-react'
import { VideoContext } from '../contexts/VideoContext'
import { getVideoId } from '../utils/helpers'
import VideoText from './VideoText'

export default function UrlVideoPage() {
  const [id, setId] = useState('')
  const { ratio, textColor } = useContext(VideoContext)
  return (
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
  )
}
