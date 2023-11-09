import styles from './Settings.module.scss'
import Slider from '../../components/settings/Slider'
import Modules from '../../components/settings/Modules'
import Exercises from '../../components/settings/Exercises'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLessonSettings } from '../../redux/slices/lessonSettingsSlice'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function LessonSettings() {

   const fetchedWordsCount = useSelector((state) => state.lessonSettings.wordsCount)
   const fetchedModules = useSelector((state) => state.lessonSettings.modules)
   const fetchedExerciseTypes = useSelector((state) => state.lessonSettings.exerciseTypes)
   const [wordsCount, setWordsCount] = useState(fetchedWordsCount)
   const [modules, setModules] = useState(fetchedModules)
   const [exerciseTypes, setExerciseTypes] = useState(fetchedExerciseTypes)

   const navigate = useNavigate()

   const userId = useSelector(state => state.user.currentUser.uid)
   const dispatch = useDispatch()

   // get settings from db for the current user with userId
   useEffect(() => {
      dispatch(fetchLessonSettings(userId))
   }, [])

   // on 'Save' button click update current user's settings in db
   function handleLessonSettings() {
      const newLessonSettings = doc(db, "lessonSettings", userId);

      updateDoc(newLessonSettings, {
         wordsCount: wordsCount,
         modules: modules,
         exerciseTypes: exerciseTypes
      });

      // as soon as settings in db updated, new settings will be fetched
      dispatch(fetchLessonSettings(userId))

      navigate('/lesson-parameters')
   }

   return (
      <div className={styles.lessonSettings}>
         <Slider fetchedWordsCount={fetchedWordsCount} wordsCount={wordsCount} setWordsCount={setWordsCount} />
         <Modules modules={modules} setModules={setModules} fetchedModules={fetchedModules} />
         <Exercises exerciseTypes={exerciseTypes} setExerciseTypes={setExerciseTypes} fetchedExerciseTypes={fetchedExerciseTypes} />
         <button className={styles.startButton} onClick={handleLessonSettings} >Сохранить и начать урок</button>
      </div>
   )
}

export default LessonSettings