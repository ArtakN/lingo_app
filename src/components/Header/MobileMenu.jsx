import styles from './Header.module.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/authSlice'

function MobileMenu() {
   // Use state to toggle the mobile navigation
   const [mobileNav, setMobileNav] = useState(false)

   // Get the current user from the redux store
   const currentUser = useSelector(state => state.auth.currentUser)
   const { email, displayName, photoURL } = currentUser ? currentUser : {}

   const navigate = useNavigate()
   const dispatch = useDispatch()

   // Define a function to handle logging out
   function handleLogOut() {
      // Remove the user from the local storage
      localStorage.setItem('user', null)
      // Remove the user from the redux store
      dispatch(logOut())
      // Navigate to the home page
      navigate('/')
      setMobileNav(false)
   }

   // Define a function to handle opening and closing the mobile menu
   function handleMobileMenu() {
      // Toggle the mobile navigation state
      setMobileNav(prevMobileNav => !prevMobileNav)
   }

   // Define a function to close the mobile menu on clicking on a menu item
   function closeMobileMenu() {
      setMobileNav(false)
   }

   return (
      <div className={styles.mobileMenu}>
         <div className={styles.burgerIcon} onClick={() => handleMobileMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 20 14" fill="none">
               <path d="M1 1.00098H19M1 7.001H19M1 13.001H19" stroke="#292929" strokeWidth='2' />
            </svg>
         </div>
         <nav className={`${styles.mobileNav}  ${mobileNav && styles.visable}`}>
            <div className={styles.closeIcon} onClick={() => handleMobileMenu()}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.9511 10.0017L19.5967 2.35477C20.1344 1.81693 20.1344 0.941217 19.5967 0.403379C19.0589 -0.13446 18.1834 -0.13446 17.6456 0.403379L10 8.05034L2.35436 0.403379C1.81661 -0.13446 0.941055 -0.13446 0.403309 0.403379C-0.134436 0.941217 -0.134436 1.81693 0.403309 2.35477L8.04895 10.0017L0.410203 17.6418C-0.127542 18.1796 -0.127542 19.0553 0.410203 19.5932C0.679076 19.8621 1.03068 20 1.38228 20C1.73388 20 2.08549 19.8621 2.35436 19.5932L10 11.9462L17.6456 19.5932C17.9145 19.8621 18.2661 20 18.6177 20C18.9693 20 19.3209 19.8621 19.5898 19.5932C20.1275 19.0553 20.1275 18.1796 19.5898 17.6418L11.9511 10.0017Z" fill="#292929" />
               </svg>
            </div>
            {
               !!currentUser
               &&
               // If the user is logged in, show the user's info
               (<div className={styles.mobileUserMenu}>
                  <div className={styles.userInfo}>
                     <img className={styles.userPhoto} src={photoURL} alt="User Photo" />
                     <div>
                        <p className={styles.userName}>{displayName}</p>
                        <p>{email}</p>
                     </div>
                  </div>
               </div>)
            }
            <ul className={styles.mobileNavList}>
               {!currentUser
                  ?
                  // If the user is not logged in, on Lesson click navigate to LogIn page.
                  <li onClick={() => closeMobileMenu()}><Link to='/login'>Lesson</Link></li>
                  :
                  // If th user is logged in, on Lesson click navigate to Lesson page.
                  <li onClick={() => closeMobileMenu()}><Link to='/lesson/parameters'>Lesson</Link></li>
               }
               <li onClick={() => closeMobileMenu()}><Link to='/allwords'>All words</Link></li >
               {!!currentUser
                  &&
                  <li onClick={() => closeMobileMenu()}><Link to="/dashboard">Dashboard</Link></li>
               }
               {!!currentUser
                  &&
                  <li onClick={() => closeMobileMenu()}><Link to='/settings'>Settings</Link></li>
               }
            </ul>
            {!currentUser
               ?
               // If the user is not logged in, show login button
               <Link to="/login" className={styles.logInBtn} onClick={() => closeMobileMenu()}>Log in</Link>
               :
               <button className={styles.logOutBtn} onClick={() => handleLogOut()}>Log out</button>
            }
         </nav>
      </div >
   )
}

export default MobileMenu
