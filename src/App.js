import WebFont from "webfontloader"
import Topbar from "./components/Topbar"
import Sidebar from './components/Sidebar'

WebFont.load({
  google: {
    families: ["Open Sans"]
  }
})

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
    </>
  )
}

export default App;
