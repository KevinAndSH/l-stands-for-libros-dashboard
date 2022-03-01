import React from 'react'
import styles from "../scss/topbar.module.scss"
import Logo from "./topbar/Logo"


function Topbar() {
  return (
    <header className={styles.topbar}>
      <Logo />
      <h3>Dashboard</h3>
    </header>
  )
}

export default Topbar