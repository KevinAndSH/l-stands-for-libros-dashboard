import React from 'react'
import styles from "./style.module.scss"
import SideLink from './SideLink'


function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
       <SideLink href={"/"}>
          Usuarios
        </SideLink>

        <SideLink href={"../../back/ultimoUsuario.jsx"}>
          Usuario mas reciente
        </SideLink>

        <SideLink href={"/"}>
          Productos
        </SideLink>

        <SideLink href={"/"}>
          Producto mas reciente
        </SideLink>

        <SideLink href={"/"}>
          Categorias
        </SideLink>

   
      </ul>
    </nav>
  )
}

export default Sidebar