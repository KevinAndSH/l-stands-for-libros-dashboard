import WebFont from "webfontloader"
import Topbar from "./components/Topbar"
import Main from "./components/Main"

WebFont.load({
  google: {
    families: ["Open Sans"]
  }
})

function App() {
  return (
    <>
      <Topbar />
      <Main />
    </>
  )
}

export default App;
