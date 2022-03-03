import { useState, useEffect } from "react"
import styles from "./index.module.scss"

function LatestUser (){
  const [userData, setUserData] = useState({
    id: "Cargando...",
    img_path: "https://lstandsforlibros.herokuapp.com/img/users/default.png",
    first_name: "Cargando...",
    last_name: "",
    email: "Cargando..."
  })

  useEffect(() => {
    let isMounted = true
    fetch("https://lstandsforlibros.herokuapp.com/api/users/latest")
      .then(res => res.json())
      .then(data => isMounted && setUserData({...data}))
      .catch(err => console.error(err))

    return () => isMounted = false
  }, [])

  
  return (
    <section className={styles["latest-user"]}>
      <h1>Último usuario creado:</h1>

      <div className={styles["data"]}>
        <img src={userData.img_path} alt="foto de perfil" />
        
        <div>
          <h2>ID: </h2>
          <p>{userData.id}</p>
          <h2>Nombre: </h2>
          <p>{userData.first_name} {userData.last_name}</p>
          <h2>Email: </h2>
          <p>{userData.email}</p>
        </div>
      </div>
    </section>
  )
}


export default LatestUser