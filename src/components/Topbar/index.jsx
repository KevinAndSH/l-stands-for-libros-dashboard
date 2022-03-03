import styles from "./style.module.scss"
import Logo from "./Logo"


function Topbar() {
  return (
    <header className={styles.topbar}>
      <Logo />
      <h3>Dashboard</h3>
    </header>
  )
}

export default Topbar