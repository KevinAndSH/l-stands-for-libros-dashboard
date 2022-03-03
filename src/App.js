import WebFont from "webfontloader"
import Topbar from "./components/front/Topbar"
import Sidebar from './components/front/Sidebar'
import ultimoUsuario from "./components/back/ultimoUsuario"

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
      <ultimoUsuario />
    </>
  )
}

export default App;
