import styles from '../../pages/LessonPage/Lesson.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function WordCard() {

   const lessonWords = useSelector((state) => state.lesson.lessonWords)

   // State to track the index of the displayed word
   const [wordIndex, setWordIndex] = useState(0)

   // Retrieve the word at the current index
   let currentWord = lessonWords[wordIndex]

   // State to control the visibility of the "Previous" button
   const [prevBtnIsVisable, setPrevBtnIsVisable] = useState(true)
   // State to determine if the end of the lessonWords array has been reached
   const [indexReachedEnd, setIndexReachedEnd] = useState(false)

   const [checkBtnIsVisable, setCheckBtnIsVisable] = useState(false)

   // Effect hook to update button visibility based on the current index
   useEffect(() => {
      // Set indexReachedEnd to true when the last word is displayed
      if (wordIndex === lessonWords.length - 1) {
         setIndexReachedEnd(true)
      }

      // Hide the "Previous" button when not at the start of the array
      if (wordIndex > 0) {
         setPrevBtnIsVisable(false)
         // Show the "Previous" button when at the start and not reached the end
      } else if (wordIndex === 0 && !indexReachedEnd) {
         setPrevBtnIsVisable(true)
      }
   }, [wordIndex, indexReachedEnd])

   // Function to display the next word in the array
   function nextWord() {
      // Increment index if not the last word of the array
      if (wordIndex < lessonWords.length - 1) {
         setWordIndex(prevIndex => prevIndex + 1)
         // Reset index to 0 if it is the last word in the array
      } else if (wordIndex === lessonWords.length - 1) {
         setWordIndex(0)
      }
   }

   // Function to display the previous word in the array
   function prevWord() {
      // Decrement index if it is not the first word in the array
      if (wordIndex > 0) {
         setWordIndex(prevIndex => prevIndex - 1)
         // If it is the first word in the array then show the last word 
      } else if (wordIndex === 0) {
         setWordIndex(lessonWords.length - 1)
      }
   }

   // Effect hook to make the "Check" button visible when the last word is shown
   useEffect(() => {
      wordIndex === lessonWords.length - 1 && setCheckBtnIsVisable(true)
   }, [wordIndex])


   return (
      <div className={styles.learnCard}>

         <div className={styles.count}>
            <p><span className={styles.current}>{wordIndex + 1}</span> / {lessonWords.length}</p>
         </div>
         <div className={styles.card}>
            <p className={styles.word}>{`${currentWord.article} ${currentWord.de}`}</p>
            <p className={styles.meaning}>{currentWord.ru}</p>
         </div>
         <div className={styles.buttons}>
            <button
               disabled={prevBtnIsVisable}
               style={prevBtnIsVisable ? { borderColor: '#ececec', color: '#B8B8B8', backgroundColor: '#ececec' } : {}}
               onClick={() => prevWord()}
               type='button'
               className={`${styles.prevBtn} ${styles.btn}`}>
               Previous
            </button>
            <button onClick={() => nextWord()} type='button' className={`${styles.nextBtn} ${styles.btn}`}>Next</button>
         </div>
         {/* <CheckButton wordIndex={wordIndex} lessonWords={lessonWords} /> */}
         <div>
            {checkBtnIsVisable && <Link to='/lesson/check' className={`${styles.checkBtn} ${styles.btn}`}>Check</Link>}
         </div>
      </div >
   )
}

export default WordCard