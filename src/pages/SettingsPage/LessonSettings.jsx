import { Link } from 'react-router-dom'
import styles from './Settings.module.scss'
import Slider from '../../components/settings/Slider'
import Modules from '../../components/settings/Modules'
import Exercises from '../../components/settings/Exercises'

function LessonSettings() {

   return (
      <div className={styles.lessonSettings}>
         <Slider />
         <Modules />
         <Exercises />
         <Link to='/words/learn' className={styles.startButton}>Сохранить</Link>
      </div>
   )
}

export default LessonSettings