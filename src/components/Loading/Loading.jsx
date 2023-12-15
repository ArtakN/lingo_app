import styles from './Loading.module.scss'

function Loading() {
   return (
      <div className={styles.loading}>
         <p className={styles.loadingText}>Loading...</p>
      </div>
   )
}

export default Loading