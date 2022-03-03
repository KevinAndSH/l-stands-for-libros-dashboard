import styles from "../scss/main.module.scss"
import Sidebar from "../components/Sidebar"
import MainPage from "../components/MainPage"

function Main() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <MainPage />
    </main>
  )
}


export default Main