import { Link } from "react-router-dom"
import styles from "./style.module.scss"

function SideLink({ href, children }) {
  return (
    <li>
      <Link to={ href } className={styles["side-link"]} data-text={children} />
    </li>
  )
}

export default SideLink