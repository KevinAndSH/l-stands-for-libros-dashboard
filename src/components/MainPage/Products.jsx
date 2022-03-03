import { useState, useEffect } from 'react'
import styles from "./index.module.scss"

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let isMounted = true
    fetch("https://lstandsforlibros.herokuapp.com/api/products/")
      .then(res => res.json())
      .then(data => isMounted && setProducts(data.products))
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [])

  return (
    <section className={styles.products}>
      <h1>Productos:</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Géneros</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
        {
          products.map(product => {
            return (
                <tr key={product.id}>
                  <td>
                    {product.id}
                  </td>

                  <td>
                    <a href={product.detail} target="_blank" rel="noreferrer">
                      {product.name}
                    </a>
                  </td>

                  <td>
                    {product.genres.join(", ") + "."}
                  </td>

                  <td style={{textAlign: "justify"}}>
                    {product.description}
                  </td>
                </tr>
            )
          })
        }
        </tbody>

      </table>
    </section>
  )
}

export default Products