import { useEffect, useState } from 'react'
import styles from './CheckWords.module.scss'
import { useSelector } from 'react-redux'

// export default function CheckWords({ learnWords, allWords }) {
export default function CheckWords() {

   const learnWords = useSelector((state) => state.learn.learnWords)
   const allWords = useSelector((state) => state.words.allWords)

   const checkList = learnWords.map(item => ({ ...item, status: '', correct: '' }))

   const randomIndex = Math.floor(Math.random() * checkList.length)

   const [remainingWords, setRemainingWords] = useState(checkList.filter((_, index) => index !== randomIndex))
   const [showNextButton, setShowNextButton] = useState(false)
   const [correctCount, setCorrectCount] = useState(0)
   const [incorrectCount, setIncorrectCount] = useState(0)
   const [reviewWords, setReviewWords] = useState([])
   const [currentWord, setCurrentWord] = useState(remainingWords[randomIndex])
   const [disabled, setDisabled] = useState(false)

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

   // get a random word from allWords array
   function getRandomWord() {
      return allWords[Math.floor(Math.random() * allWords.length)]
   }

   function checkMatch(index) {
      let status = ''
      if (currentWord.meaning === reviewWords[index].meaning) {
         status = 'learned'
         setCorrectCount((prevCorrectCount) => { return prevCorrectCount + 1 })
      } else {
         status = 'notLearned'
         setIncorrectCount((prevIncorrectCount) => { return prevIncorrectCount + 1 })
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

   const setNextWord = () => {
      const newIndex = Math.floor(Math.random() * remainingWords.length);
      setCurrentWord(remainingWords[newIndex]);
      setRemainingWords(prevWords => prevWords.filter((_, index) => index !== newIndex))
      setShowNextButton(false)
      setDisabled(false)
   }

   return (
      <div className={styles.checkWords}>
         <div className={styles.container}>
            <div className={styles.counts}>
               <p><span className={styles.correctCount}>{correctCount}</span> / <span className={styles.incorrectCount}>{incorrectCount}</span></p>
            </div>
            <div className={styles.card}>
               <p>{currentWord.meaning}</p>
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
                     {`${item.article} ${item.word}`}
                  </li>
               ))}
            </ul>
            {showNextButton && <button type='button' className={styles.btn} onClick={setNextWord}>Следующий
            </button>}
         </div>
      </div>
   )
}