import { useState } from "react";
import { Grid } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import FileInput from "./components/FileInput";
import EditPage from "./components/EditPage";
export default function App() {

  const [videoSource, setVideoSource] = useState()

  return (
    <Grid padded stackable style={{ height: '100vh' }} centered >
      <EditPage setVideoSource={setVideoSource} videoSource={videoSource} />
    </Grid>
  )
}
