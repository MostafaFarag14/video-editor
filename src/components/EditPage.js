import React from 'react'
import { Grid, Tab } from 'semantic-ui-react'
import UrlVideoPage from './UrlVideoPage'
import LocalVideoPage from './LocalVideoPage'

export default function EditPage({ ratio, textColor }) {


  const panes = [
    { menuItem: 'Browse Local File', render: () => <LocalVideoPage ratio={ratio} textColor={textColor} /> },
    { menuItem: 'Insert YouTube URL', render: () => <UrlVideoPage ratio={ratio} textColor={textColor} /> }
  ]

  return (
    <Grid.Column computer={13} tablet={12}>
      <Tab menu={{ attached: false }} panes={panes} />
    </Grid.Column>
  )
}
