import { useState, useEffect } from "react"
import styles from "./index.module.scss"

function LatestProduct (){
  const [productData, setProductData] = useState({
    id: "Cargando...",
    img_path: "https://lstandsforlibros.herokuapp.com/img/products/default.png",
    name: "Cargando...",
    author: "Cargando...",
    isbn: "Cargando...",
    house: "Cargando...",
    price: "Cargando",
    description: "Cargando...",
    genres: ["Cargando.."]
  })

  useEffect(() => {
    let isMounted = true
    fetch("https://lstandsforlibros.herokuapp.com/api/products/latest")
      .then(res => res.json())
      .then(data => isMounted && setProductData({...data}))
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [])


  return (
    <section className={styles["latest-product"]}>
      <div className="title">
        <h1> Último producto creado </h1>
      </div>

      <div className={styles["data"]}>
        <img src={productData.img_path} alt="foto de producto" />
        
        <div>
          <h2>ID:</h2>
          <p>{productData.id}</p>

          <h2>Nombre:</h2>
          <p>{productData.name}</p>

          <h2>Autor:</h2>
          <p>{productData.author}</p>

          <h2>ISBN:</h2>
          <p>{productData.isbn}</p>

          <h2>Editorial:</h2>
          <p>{productData.house}</p>

          <h2>Precio:</h2>
          <p>{productData.price}</p>

          <h2>Descripción:</h2>
          <p>{productData.description}</p>

          <h2>Géneros:</h2>
          <p>{productData.genres.join(", ") + "."}</p>
        </div>
      </div>
    </section>
  )
}


export default LatestProduct