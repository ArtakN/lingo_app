import { useEffect, useState } from 'react'
import styles from '../../pages/LessonPage/Lesson.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Card() {

   const learnWords = useSelector((state) => state.lesson.learnWords)

   const [index, setIndex] = useState(0)

   let newWord = learnWords[index]

   // "prevBtn" becomes and stay visable when all learnWords shown
   const [prevBtnIsVisable, setPrevBtnIsVisable] = useState(true)
   const [indexReachedEnd, setIndexReachedEnd] = useState(false)

   useEffect(() => {
      if (index === learnWords.length - 1) {
         setIndexReachedEnd(true)
      }

      if (index > 0) {
         setPrevBtnIsVisable(false)
      } else if (index === 0 && !indexReachedEnd) {
         setPrevBtnIsVisable(true)
      }
   }, [index, indexReachedEnd])


   function nextWord() {
      if (index < learnWords.length - 1) {
         setIndex(prevIndex => prevIndex + 1)
      } else if (index === learnWords.length - 1) {
         setIndex(0)
      }
   }

   function prevWord() {
      if (index > 0) {
         setIndex(prevIndex => prevIndex - 1)
      } else if (index === 0) {
         setIndex(learnWords.length - 1)
      }
   }

   return (
      <div className={styles.learnCard}>
         <div className={styles.count}>
            <p><span className={styles.current}>{index + 1}</span> / {learnWords.length}</p>
         </div>
         <div className={styles.card}>
            <p className={styles.word}>{`${newWord.article} ${newWord.de}`}</p>
            <p className={styles.meaning}>{newWord.ru}</p>
         </div>
         <div className={styles.buttons}>
            <button
               disabled={prevBtnIsVisable}
               style={prevBtnIsVisable ? { borderColor: '#ececec', color: '#B8B8B8', backgroundColor: '#ececec' } : {}}
               onClick={prevWord}
               type='button'
               className={`${styles.prevBtn} ${styles.btn}`}>
               Предыдущий
            </button>
            <button onClick={nextWord} type='button' className={`${styles.nextBtn} ${styles.btn}`}>Следующий</button>
         </div>
         <CheckBtn index={index} learnWords={learnWords} />
      </div >
   )
}

function CheckBtn({ index, learnWords }) {
   // "Check" button becomes and stay visable when all learnWords words shown
   const [checkBtnIsVisable, setCheckBtnIsVisable] = useState(false)

   // useEffect lets the button to become and stay visable
   useEffect(() => {
      index === learnWords.length - 1 && setCheckBtnIsVisable(true)
   }, [index])

   return (
      <>
         {checkBtnIsVisable && <Link to='/lesson/check' className={`${styles.checkBtn} ${styles.btn}`}>Проверить</Link>}
      </>
   )
}