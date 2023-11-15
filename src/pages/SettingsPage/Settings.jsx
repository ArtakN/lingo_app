import styles from './Settings.module.scss'
import LessonSettings from './LessonSettings'
import ProfileSettings from './ProfilesSettings'
import { useState } from 'react'


function Settings() {

   const [selectedTab, setSelectedTab] = useState('lessonSettings')

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
                     <LessonSettings />
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

export default Settings