import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import Search from './Search'
import UserMenu from './UserMenu'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Header() {

   const [pageScrolled, setPageScrolled] = useState(false)

   const currentUser = useSelector(state => state.user.currentUser)

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <p className={styles.logo}><Link to='/'>Wortschatz</Link></p>
            <Search />
            <nav>
               <ul className={styles.navList}>
                  <li className={styles.navItem}><Link to="/settings" cl>Learn</Link> </li>
                  <li className={styles.navItem}><Link to="/allwords">All words</Link></li>
               </ul>
               {
                  !currentUser
                     ?
                     <div className={styles.userAuth}>
                        <div className={styles.logIn}><Link to="/login">Log in</Link></div>
                        <div className={styles.signUp}><Link to="/signup">Sign up</Link></div>
                     </div>
                     :
                     <UserMenu />
               }
            </nav>
         </div>
      </div>
   )
}