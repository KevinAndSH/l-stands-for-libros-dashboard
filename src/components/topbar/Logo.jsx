import React from 'react'
import styles from "../../scss/logo.module.scss"
import logo from "../../assets/logo.png"

function Logo() {
  return (
    <div className={styles["logo"]}>
      <img src={logo} alt="logo" />

      <div className={styles["logo--text"]}>
        <span>L&nbsp;STANDS</span>
        <span>FOR&nbsp;LIBROS</span>
      </div>
    </div>
  )
}

export default Logo