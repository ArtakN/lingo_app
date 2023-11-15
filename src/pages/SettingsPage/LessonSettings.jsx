import styles from './Settings.module.scss'
import Slider from '../../components/settings/Slider'
import Modules from '../../components/settings/Modules'
import Exercises from '../../components/settings/Exercises'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateLessonSettings } from '../../redux/slices/lessonSettingsSlice'

// Function component for Lesson Settings
function LessonSettings() {

   // Using selectors to get the necessary state from the Redux store
   const fetchedWordsCount = useSelector((state) => state.lessonSettings.wordsCount)
   const fetchedModules = useSelector((state) => state.lessonSettings.modules)
   const fetchedExerciseTypes = useSelector((state) => state.lessonSettings.exerciseTypes)
   const loading = useSelector((state) => state.lessonSettings.loading);
   const error = useSelector((state) => state.lessonSettings.error);

   // State variables for the component
   const [wordsCount, setWordsCount] = useState(fetchedWordsCount)
   const [modules, setModules] = useState(fetchedModules)
   const [exerciseTypes, setExerciseTypes] = useState(fetchedExerciseTypes)

   // Getting the user ID from the Redux store
   const userId = useSelector(state => state.user.currentUser.uid)
   const dispatch = useDispatch()

   // I moved the lesson settings fetching logic to App component to avoid unnecessary database fetch when user changes tabs between lessonSetting and accountSettings and for LessonParams component. In this case the lesson settings will be fetched only once when the App component mounts.

   // Function to handle the updating of lesson settings in the database
   function handleLessonSettings() {
      // Dispatch an action to update the lesson settings
      dispatch(updateLessonSettings({ userId, newSettings: { wordsCount, modules, exerciseTypes } }));
   }

   // Rendering the component
   return (
      loading ? <div>Loading...</div> : (
         <div div className={styles.lessonSettings} >
            <Slider fetchedWordsCount={fetchedWordsCount} wordsCount={wordsCount} setWordsCount={setWordsCount} />
            <Modules modules={modules} setModules={setModules} fetchedModules={fetchedModules} />
            <Exercises exerciseTypes={exerciseTypes} setExerciseTypes={setExerciseTypes} fetchedExerciseTypes={fetchedExerciseTypes} />
            <button className={styles.startButton} onClick={handleLessonSettings} >Сохранить</button>
         </div >
      )
   )
}

// Exporting the component
export default LessonSettings