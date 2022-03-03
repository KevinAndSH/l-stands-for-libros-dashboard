import { Routes, Route } from "react-router-dom"
import styles from "./index.module.scss"
import CountPanels from './CountPanels'
import Home from "./Home"
import Users from "./Users"
import LatestUser from './LatestUser'
import Products from "./Products"
import LatestProduct from "./LatestProduct"
import Genres from "./Genres"

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <CountPanels />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/latest-user" element={ <LatestUser /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/latest-product" element={ <LatestProduct /> } />
        <Route path="/genres" element={ <Genres /> } />
      </Routes>
    </div>
  )
}

export default MainPage