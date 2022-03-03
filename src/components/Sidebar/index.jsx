import React from "react"
import styles from "./style.module.scss"
import SideLink from "./SideLink"


function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <SideLink href={"/users"}>
          Usuarios
        </SideLink>

        <SideLink href={"/latest-user"}>
          Usuario mas reciente
        </SideLink>

        <SideLink href={"/products"}>
          Productos
        </SideLink>

        <SideLink href={"/latest-product"}>
          Producto mas reciente
        </SideLink>

        <SideLink href={"/genres"}>
          Géneros
        </SideLink>

   
      </ul>
    </nav>
  )
}

export default Sidebar