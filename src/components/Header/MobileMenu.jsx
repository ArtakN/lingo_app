import styles from './Header.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MobileMenu() {
   const [mobileNav, setMobileNav] = useState(false)

   const currentUser = useSelector(state => state.user.currentUser)

   function handleMobileMenu() {
      setMobileNav(prevMobileNav => !prevMobileNav)
   }

   return (
      <div className={styles.mobileMenu}>
         <div className={styles.burgerIcon} onClick={handleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 20 14" fill="none">
               <path d="M1 1.00098H19M1 7.001H19M1 13.001H19" stroke="#292929" strokeWidth='2' />
            </svg>
         </div>
         <nav className={`${styles.mobileNav}  ${mobileNav && styles.visable}`}>
            <div className={styles.closeIcon} onClick={handleMobileMenu}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.9511 10.0017L19.5967 2.35477C20.1344 1.81693 20.1344 0.941217 19.5967 0.403379C19.0589 -0.13446 18.1834 -0.13446 17.6456 0.403379L10 8.05034L2.35436 0.403379C1.81661 -0.13446 0.941055 -0.13446 0.403309 0.403379C-0.134436 0.941217 -0.134436 1.81693 0.403309 2.35477L8.04895 10.0017L0.410203 17.6418C-0.127542 18.1796 -0.127542 19.0553 0.410203 19.5932C0.679076 19.8621 1.03068 20 1.38228 20C1.73388 20 2.08549 19.8621 2.35436 19.5932L10 11.9462L17.6456 19.5932C17.9145 19.8621 18.2661 20 18.6177 20C18.9693 20 19.3209 19.8621 19.5898 19.5932C20.1275 19.0553 20.1275 18.1796 19.5898 17.6418L11.9511 10.0017Z" fill="#292929" />
               </svg>
            </div>
            <ul className={styles.mobileNavList}>
               <Link to='/lesson/parameters'><li>Lesson</li></Link>
               <Link to='/allwords'><li>All words</li></Link>
            </ul>
            {
               !currentUser
               &&
               <div className={styles.logIn}><Link to="/login">Log in</Link></div>
            }
         </nav>
      </div >
   )
}

export default MobileMenu