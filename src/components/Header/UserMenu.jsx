import styles from './Header.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'

function UserMenu() {

   const [userMenu, setUserMenu] = useState(false)

   const { email, displayName, photoURL } = useSelector(state => state.auth.currentUser)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   function handleLogOut() {
      localStorage.setItem('user', null)
      dispatch(logOut())
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