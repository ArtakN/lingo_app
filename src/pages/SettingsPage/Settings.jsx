import styles from './Settings.module.scss'
import LessonSettings from './LessonSettings'
import ProfileSettings from './ProfilesSettings'
import ErrorMsg from '../../components/Error/Error'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Settings() {

   const [selectedTab, setSelectedTab] = useState('lessonSettings')

   const userId = useSelector(state => state.user.currentUser.uid)
   console.log(userId)

   const handleLessonSettings = async () => {
      try {
         const updatedVac = doc(db, "lessonSettings", userId);
         await updateDoc(updatedVac, {
            learnedWords: arrayUnion("Armenia")
         });
      } catch (error) {
         <ErrorMsg />
         console.log(error)
      }
   }

   return (
      <div className={styles.settings}>
         <div className={styles.container}>
            <div className={styles.tabs}>
               <button className={`${styles.tabBtn} ${selectedTab === 'lessonSettings' && styles.active} `} type='button' onClick={() => setSelectedTab('lessonSettings')}>Настройки урока</button>
               <button className={`${styles.tabBtn} ${selectedTab === 'profileSettings' && styles.active}`} type='button' onClick={() => setSelectedTab('profileSettings')}>Настройки профиля</button>
            </div>
            {selectedTab === 'lessonSettings' ?
               (
                  <div className={styles.activeTab}>
                     <LessonSettings handleLessonSettings={handleLessonSettings} />
                  </div>
               ) : (
                  <div className={styles.activeTab}>
                     <ProfileSettings />
                  </div>
               )
            }
         </div>
      </div>
   )
}