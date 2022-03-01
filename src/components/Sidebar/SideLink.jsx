import React from 'react'
import { Link } from "react-router-dom"
import styles from "./style.module.scss"

function SideLink({ href, children }) {
  return (
    <li>
      <Link to={ href } className={styles["side-link"]}>
        { children }
      </Link>
    </li>
  )
}

export default SideLink