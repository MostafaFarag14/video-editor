import React, { useEffect, useRef, useState } from 'react'
import { Grid, Input, Tab } from 'semantic-ui-react'
import Player from 'video-react/lib/components/Player'
import EditMenu from './EditMenu'
import FileInput from './FileInput'
import Video from './Video'
import UrlVideoPage from './UrlVideoPage'

export default function EditPage({ videoSource, setVideoSource }) {
  const [ratio, setRatio] = useState('16:9')
  const [textColor, setTextColor] = useState('yellow')
  
  const panes = [
    {
      menuItem: 'Browse Local File', render: () => (
        <>
          {
            videoSource ?
              <>
                <FileInput setVideoSource={setVideoSource} />
                <Video textColor={textColor} ratio={ratio} videoSource={videoSource} />
              </>
              :
              <FileInput setVideoSource={setVideoSource} />
          }
        </>
      )
    },
    {
      menuItem: 'Insert YouTube URL', render: () => {
        return (
          <UrlVideoPage ratio={ratio} />
        )
      }
    }
  ]


  return (
    <>
      <Grid.Column computer={13}>
        <Tab menu={{ color: 'grey', inverted: true }} panes={panes} onTabChange={() => setVideoSource('')} />
      </Grid.Column>
      <EditMenu setTextColor={setTextColor} setRatio={setRatio} />
    </>
  )
}
