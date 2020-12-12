import React, { useState } from 'react'
import FileUpload from './FileUpload'
import VideoText from './VideoText'

import { Player } from 'video-react'
import { Container } from 'semantic-ui-react'
export default function LocalVideoPage({ ratio, textColor }) {
  const [videoSource, setVideoSource] = useState()

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
