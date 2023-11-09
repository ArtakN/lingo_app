import { useEffect, useState } from 'react'
import styles from '../../pages/SettingsPage/Settings.module.scss'

function Slider({ fetchedWordsCount, wordsCount, setWordsCount }) {

   // on page reload wordsCount is 0 as it setted in Slice inital value, and in a cople of seconds new wordsCount value fetched from db, and this will update the wordsCount inital value with fetched value
   useEffect(() => {
      setWordsCount(fetchedWordsCount)
   }, [fetchedWordsCount])

   function changeSliderValue(e) {
      let value = Number(e.target.value)
      setWordsCount(value)
   }

   return (
      <div className={styles.sliderBlcok}>
         <p className={styles.blockTitle}>Количество слов в уроке</p>
         <div className={styles.slider}>
            <p className={styles.sliderValue}><span>{wordsCount}</span> / 50</p>
            <input onChange={(e) => { changeSliderValue(e) }} type="range" className={styles.sliderInput} min='5' max='50' step='5' value={wordsCount} />
         </div>
      </div>
   )
}

export default Slider