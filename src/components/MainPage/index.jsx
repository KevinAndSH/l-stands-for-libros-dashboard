import { Routes, Route } from "react-router-dom"
import styles from "./index.module.scss"
import CountPanels from './CountPanels'
import Home from "./Home"
import LatestUser from './LatestUser'
import LatestProduct from "./LatestProduct"

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <CountPanels />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/users" element={ "users" } />
        <Route path="/latest-user" element={ <LatestUser /> } />
        <Route path="/products" element={ "products" } />
        <Route path="/latest-product" element={ <LatestProduct /> } />
        <Route path="/genres" element={ "genres" } />
      </Routes>
    </div>
  )
}

export default MainPage