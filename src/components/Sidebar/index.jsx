import React from 'react'
import styles from "./style.module.scss"
import SideLink from './SideLink'

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <SideLink href={"/"}>
          Producto mas reciente
        </SideLink>

        <SideLink href={"/"}>
          Usuario mas reciente
        </SideLink>

        <SideLink href={"/"}>
          Categorias
        </SideLink>

        <SideLink href={"/"}>
          Productos
        </SideLink>
      </ul>
    </nav>
  )
}

export default Sidebar