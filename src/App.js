import Topbar from "./components/Topbar";
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Open Sans"]
  }
})

function App() {
  return (
    <Topbar />
  )
}

export default App;
