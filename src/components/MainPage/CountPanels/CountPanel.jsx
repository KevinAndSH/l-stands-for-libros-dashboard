import styles from "./index.module.scss"

function CountPanel({ label, count }) {
  return (
    <div className={styles.panel} data-label={label + ": "}>
      { count }
    </div>
  )
}

export default CountPanel