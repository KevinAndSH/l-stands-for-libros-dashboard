import { useState, useEffect } from 'react'
import styles from "./index.module.scss"

function Users() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    let isMounted = true
    setUsers([])
    fetch("https://lstandsforlibros.herokuapp.com/api/users?page=" + page)
      .then(res => res.json())
      .then(data => {
        isMounted && setUsers(data.users)
        setTotalPages(Math.ceil(data.count / 10))
      })
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [page])

  return (
    <section className={styles.users}>
      <h1>Usuarios:</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>
        {
          users.map(user => {
            return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
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

export default Users