import styles from './Error.module.scss'

function ErrorMsg() {
   return (
      <div className={styles.errorBlock}>
         <h1>Sorry, something went wrong.</h1>
         <p>Try later</p>
      </div>
   )
}

export default ErrorMsg