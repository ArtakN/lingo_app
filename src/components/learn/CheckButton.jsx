import styles from '../../pages/LessonPage/Lesson.module.scss'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CheckButton({ wordIndex, lessonWords }) {
   // State to control the visibility of the "Check" button
   const [checkBtnIsVisable, setCheckBtnIsVisable] = useState(false)

   // Effect hook to make the "Check" button visible when the last word is shown
   useEffect(() => {
      wordIndex === lessonWords.length - 1 && setCheckBtnIsVisable(true)
   }, [wordIndex])

   // Render the "Check" button if it is visible
   return (
      <>
         {checkBtnIsVisable && <Link to='/lesson/check' className={`${styles.checkBtn} ${styles.btn}`}>Check</Link>}
      </>
   )
}

export default CheckButton