import { useState, useEffect } from 'react'
import styles from "./index.module.scss"

function Genres() {
  const [genres, setGenres] = useState({})

  useEffect(() => {
    let isMounted = true
    fetch("https://lstandsforlibros.herokuapp.com/api/products")
      .then(res => res.json())
      .then(data => isMounted && setGenres(data.countByGenre))
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [])

  return (
    <section className={styles.genres}>
      <h1>Géneros:</h1>
      
      <table>
        <thead>
          <tr>
            <th>Género</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tbody>
        {
          Object.keys(genres).map(name => {
            return (
              <tr key={name}>
                <td>
                  {name}
                </td>

                <td>
                  {genres[name]}
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

export default Genres