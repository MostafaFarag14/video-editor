import React, { useContext, useState } from 'react'
import FileUpload from './FileUpload'
import VideoText from './VideoText'
import { Player } from 'video-react'
import { Container } from 'semantic-ui-react'
import { VideoContext } from '../contexts/VideoContext'

export default function LocalVideoPage() {
  const [videoSource, setVideoSource] = useState()
  const { textColor, ratio } = useContext(VideoContext)
  return (<>
    <FileUpload setVideoSource={setVideoSource} />
    {
      videoSource &&
      < Container >
        <VideoText textColor={textColor} />
        <Player aspectRatio={ratio} autoPlay src={videoSource} fluid />
      </Container >
    }
  </>)
}
