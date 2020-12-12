import React from 'react'
import { Grid, Header, Label } from 'semantic-ui-react'
import AspectRatioEdit from './AspectRatioEdit'
import TextEdit from './TextEdit'

export default function EditMenu({ setRatio, setTextColor }) {
  return (
    <Grid.Column computer={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#252935',
        boxShadow: '-2px 0px 2px 2px #252935de'
      }}>
      <Header color='grey' style={{ marginBottom: 10 }} content='Choose Color' />
      <TextEdit setTextColor={setTextColor} />
      <Header color='grey' style={{ marginTop: 50 }} content='Choose Aspect Ratio' />
      <AspectRatioEdit setRatio={setRatio} />
    </Grid.Column>
  )
}
