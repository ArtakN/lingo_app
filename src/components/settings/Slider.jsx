import styles from '../../pages/SettingsPage/Settings.module.scss'
import { setWordsCount } from '../../redux/slices/settingsSlice'
import { useSelector, useDispatch } from 'react-redux'

function Slider() {

   const wordsCount = useSelector((state) => state.settings.wordsCount)
   const dispatch = useDispatch()


   function changeSliderValue(e) {
      let value = Number(e.target.value)

      if (value < 5) {
         dispatch(setWordsCount(5))
      } else {
         dispatch(setWordsCount(value))
      }
   }

   return (
      <div className={styles.sliderBlcok}>
         <p className={styles.blockTitle}>Слов в уроке</p>
         <div className={styles.slider}>
            <p className={styles.sliderValue}><span>{wordsCount}</span> / 50</p>
            <input onChange={(e) => { changeSliderValue(e) }} type="range" className={styles.sliderInput} min='0' max='50' step='5' value={wordsCount} />
         </div>
      </div>
   )
}

export default Slider