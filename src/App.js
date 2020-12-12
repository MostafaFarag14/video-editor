import { Grid } from "semantic-ui-react";
import EditPage from "./components/EditPage";
import EditMenu from './components/EditMenu'

export default function App() {

  return (
    <Grid padded stackable style={{ height: '100vh' }} centered >
      <EditPage />
      <EditMenu />
    </Grid>
  )
}
