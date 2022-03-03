import React, { useState, useEffect} from 'react'

const APIusuarios = 'https://lstandsforlibros.herokuapp.com/API/users'

function Ultimousuario (){
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try{
      const db = await fetch(APIusuarios)
      const users = await db.json()
      setUsers(db.latest)
      console.log(users)
    }
    catch (error) {
      throw error
    }
  }
  
  useEffect(() => {
    console.log('Usando useEffect')
    getUsers()
  }, [])

  return (
    <div className="App">
      <section className="user-detail">
        <div className="title">
          <h1 className> Último usuario creado </h1>
        </div>
        <div>
          <img className="imageLastUser" src={users} alt ="userImage"/>
          <h2 className = "name"> Nombre </h2>
          <h3> {users} </h3>
          <h2 className = "email"> Email </h2>
          <h3> {users} </h3>
        </div>
      </section>
    </div>
  )
}

export default Ultimousuario