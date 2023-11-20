import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'
import { useSelector } from 'react-redux'


function Home() {
   const currentUser = useSelector(state => state.user.currentUser)

   return (
      <div className={styles.home}>
         <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Wortschatz!</h1>

            <p className={styles.subtitle}>This platform is designed to help you enhance your German vocabulary. </p>  <br />
            <p>The words are structured into modules such as A11, A12, A21, and so on. Each module is designed to take your language skills to the next level. </p><br />
            <p>Choose a module and begin your journey into the German language. Each lesson contains a variety of words commonly used in everyday conversations, literature, and media.
            </p>
            <div className={styles.buttonBox}>
               {
                  currentUser ?
                     <Link to='/lesson/parameters' className={styles.startBtn}>Start lesson</Link>
                     :
                     <Link to='/login' className={styles.startBtn}>Start lesson</Link>
               }

            </div>

            <p>On your dashboard, you can track your progress and review your learned words anytime. You can also relearn the words you've forgotten. </p><br />
            <p className={styles.greeting}>Happy learning!</p>
         </div>
      </div >
   )
}

export default Home