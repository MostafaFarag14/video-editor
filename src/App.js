import { useState } from 'react'
import { Grid } from "semantic-ui-react";
import EditPage from "./components/EditPage";
import EditMenu from './components/EditMenu'

export default function App() {
  const [ratio, setRatio] = useState('16:9')
  const [textColor, setTextColor] = useState('yellow')

  return (
    <Grid padded stackable style={{ height: '100vh' }} centered >
      <EditPage ratio={ratio} textColor={textColor} />
      <EditMenu setTextColor={setTextColor} setRatio={setRatio} />
    </Grid>
  )
}
