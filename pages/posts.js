import styles from '../styles.module.css'
export default function Post(props) {
    return (
      <div className={styles.post}>
          <a className={styles.link} href={props.link}><p className={styles.titulo}>{props.titulo}</p></a>
      </div>
    )
  }