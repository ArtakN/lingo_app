import styles from './Lesson.module.scss'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCorrectWords, setIncorrectWords } from '../../redux/slices/lessonSlice'

export default function Check() {

   // Using Redux to get the state of lessonWords and allWords
   const lessonWords = useSelector((state) => state.lesson.lessonWords)
   const allWords = useSelector((state) => state.words.allWords)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   // Creating a new array for checking the words, the new arrays objects have aditional "status" and "correct" properties
   const checkList = lessonWords.map(item => ({ ...item, status: '', correct: '' }))

   // Getting a random index for selecting the current word
   const randomIndex = Math.floor(Math.random() * checkList.length)

   // Defining state variables
   const [remainingWords, setRemainingWords] = useState(checkList.filter((_, index) => index !== randomIndex))
   const [showNextButton, setShowNextButton] = useState(false)
   // const [correctCount, setCorrectCount] = useState(0)
   // const [incorrectCount, setIncorrectCount] = useState(0)

   const [correctAnswers, setCorrectAnswers] = useState([])
   const [incorrectAnswers, setIncorrectAnswers] = useState([])

   const [reviewWords, setReviewWords] = useState([])
   const [currentWord, setCurrentWord] = useState(remainingWords[randomIndex])
   const [disabled, setDisabled] = useState(false)

   // useEffect hook to update the reviewWords state whenever the currentWord changes
   useEffect(() => {

      let newWordsArray = [];

      newWordsArray.push(currentWord);

      while (newWordsArray.length < 5) {
         let newWord = getRandomWord();
         if (!newWordsArray.some(item => item.word === newWord.word)) {
            newWordsArray.push(newWord);
         }
      }

      // Shuffle array
      for (let i = newWordsArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [newWordsArray[i], newWordsArray[j]] = [newWordsArray[j], newWordsArray[i]];
      }

      setReviewWords(newWordsArray);

   }, [currentWord])

   // Function to get a random word from allWords array
   function getRandomWord() {
      return allWords[Math.floor(Math.random() * allWords.length)]
   }

   // Function to check if the selected word matches the current word
   function checkMatch(index) {
      let status = ''
      if (currentWord.meaning === reviewWords[index].meaning) {
         status = 'learned'
         // setCorrectCount((prevCorrectCount) => { return prevCorrectCount + 1 })
         setCorrectAnswers((prevCorrectWords) => { return [...prevCorrectWords, currentWord] })
      } else {
         status = 'notLearned'
         // setIncorrectCount((prevIncorrectCount) => { return prevIncorrectCount + 1 })
         setIncorrectAnswers((prevIncorrectWords) => { return [...prevIncorrectWords, currentWord] })
      }

      setDisabled(true)
      setShowNextButton(true)

      setReviewWords(prevWords => prevWords.map((word, i) => {
         if (word.meaning === currentWord.meaning && i !== index) {
            return { ...word, correct: 'yes' }
         } else if (i === index) {
            return { ...word, status: status }
         } else {
            return word
         }
      }))
   }

   // Function to set the next word for review
   const setNextWord = () => {
      if (remainingWords.length > 0) {
         const newIndex = Math.floor(Math.random() * remainingWords.length);
         setCurrentWord(remainingWords[newIndex]);
         setRemainingWords(prevWords => prevWords.filter((_, index) => index !== newIndex))
         setShowNextButton(false)
         setDisabled(false)
      } else {
         dispatch(setCorrectWords(correctAnswers))
         dispatch(setIncorrectWords(incorrectAnswers))
         navigate('/lesson/result')
      }
   }

   return (
      <div className={styles.check}>
         <div className={styles.checkContainer}>
            <div className={styles.counts}>
               <p><span className={styles.correctCount}>{correctAnswers.length}</span> / <span className={styles.incorrectCount}>{incorrectAnswers.length}</span></p>
            </div>
            <div className={styles.card}>
               <p>{currentWord.ru}</p>
            </div>
            <ul className={styles.wordList}>
               {reviewWords.map((item, index) => (
                  <li key={item.word}
                     onClick={() => checkMatch(index)}
                     className={`
                     ${styles.wordListItem} 
                     ${item.correct === 'yes' ? styles.correctAnswer : ''}
                     ${item.status === 'learned' ? styles.learned : ''} 
                     ${item.status === 'notLearned' ? styles.notLearned : ''}
                     ${disabled && styles.disabled}`}>
                     {`${item.article} ${item.de}`}
                  </li>
               ))}
            </ul>
            {showNextButton && <button type='button' className={styles.btn} onClick={setNextWord}>Следующий
            </button>}
         </div>
      </div>
   )
}