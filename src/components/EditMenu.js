import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import AspectRatioEdit from './AspectRatioEdit'
import { CirclePicker } from 'react-color'

export default function EditMenu({ setRatio, setTextColor }) {
  return (
    <Grid.Column computer={3} tablet={4}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#252935',
        boxShadow: '-2px 0px 5px #252935de'
      }}>
      <Header color='grey' style={{ marginBottom: 10 }} content='Choose Text Color' />
      <CirclePicker width='auto' onChange={(color, event) => setTextColor(color.hex)} />
      <Header color='grey' style={{ marginTop: 50 }} content='Choose Aspect Ratio' />
      <AspectRatioEdit setRatio={setRatio} />
    </Grid.Column>
  )
}
