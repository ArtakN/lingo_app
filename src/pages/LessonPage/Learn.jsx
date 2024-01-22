import styles from './Lesson.module.scss'
import WordCard from '../../components/Lesson/WordCard'

function Learn() {


   return (
      <div className={styles.learn}>
         <div className={styles.container}>
            <WordCard />
         </div>
      </div >
   )
}

export default Learn