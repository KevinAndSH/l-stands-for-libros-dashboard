import { useState, useEffect } from "react"
import styles from "./index.module.scss"
import CountPanel from './CountPanel'

function CountPanels() {
  const [productAmount, setProductAmount] = useState("Cargando...")
  const [userAmount, setUserAmount] = useState("Cargando...")
  const [genreAmount, setGenreAmount] = useState("Cargando...")

  useEffect(() => {
    fetch("https://lstandsforlibros.herokuapp.com/api/products")
      .then(res => res.json())
      .then(data => {
        setProductAmount(data.count)
        setGenreAmount(Object.keys(data.countByGenre).length)
      })
      .catch(err => {
        setProductAmount("Dato no disponible :(")
        setGenreAmount("Dato no disponible :(")
      })

    fetch("https://lstandsforlibros.herokuapp.com/api/users")
      .then(res =>res.json())
      .then(data => setUserAmount(data.count))
      .catch(err => setUserAmount("Dato no disponible :("))
  }, [])

  return (
    <div className={styles["panel-wrapper"]}>
      <CountPanel label="Productos" count={productAmount}/>
      <CountPanel label="Usuarios" count={userAmount}/>
      <CountPanel label="Géneros" count={genreAmount}/>
    </div>
  )
}

export default CountPanels