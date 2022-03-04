import { useState, useEffect } from 'react'
import styles from "./index.module.scss"

function Products() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    let isMounted = true
    setProducts([])
    fetch("https://lstandsforlibros.herokuapp.com/api/products?page=" + page)
      .then(res => res.json())
      .then(data => {
        isMounted && setProducts(data.products)
        setTotalPages(Math.ceil(data.count / 10))
      })
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [page])

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

      <div className={styles["page-link-wrapper"]}>
        <button
          onClick={page > 1 ? (() => setPage(page => page - 1)) : undefined}
          className={page > 1 ? "" : styles.disabled}
        >
          Anterior
        </button>

        <button
          onClick={page < totalPages ? (() => setPage(page => page + 1)) : undefined}
          className={page < totalPages ? "" : styles.disabled}
        >
          Siguiente
        </button>
      </div>
    </section>
  )
}

export default Products