import styles from './Header.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../redux/slices/userSlice'
import { Link, useNavigate } from 'react-router-dom'

function UserMenu() {

   const [userMenu, setUserMenu] = useState(false)

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { email, displayName, photoURL } = useSelector(state => state.user.currentUser)


   function handleLogOut() {
      localStorage.setItem('user', null)
      dispatch(removeUser())
      navigate('/')
   }

   return (
      <div className={styles.userMenu} onMouseEnter={() => setUserMenu(true)} onMouseLeave={() => setUserMenu(false)}>
         <div className={styles.userPhotoBlock}><img className={styles.userPhoto} src={photoURL} alt="User Photo" /></div>
         {userMenu &&
            <ul className={styles.menu}>
               <li><p className={styles.userName}>{displayName}</p><p>{email}</p></li>
               <li><Link to="/dashboard">Dashboard</Link></li>
               <li><Link to='/settings'>Settings</Link></li>
               <li onClick={handleLogOut}>Log out</li>
            </ul>
         }
      </div>
   )
}

export default UserMenu