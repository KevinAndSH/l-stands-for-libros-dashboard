import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import styles from "./style.module.scss"

function Logo() {
  return (
    <Link to="/" className={styles["logo"]}>
      <img src={logo} alt="logo" />

      <div className={styles["logo--text"]}>
        <span>L&nbsp;STANDS</span>
        <span>FOR&nbsp;LIBROS</span>
      </div>
    </Link>
  )
}

export default Logo