import { useState, useEffect } from 'react'
import styles from "./index.module.scss"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let isMounted = true
    fetch("https://lstandsforlibros.herokuapp.com/api/users/")
      .then(res => res.json())
      .then(data => isMounted && setUsers(data.users))
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [])

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
    </section>
  )
}

export default Users