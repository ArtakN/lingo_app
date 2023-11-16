import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Search from './Search'
import UserMenu from './UserMenu'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function Header() {

   const [pageScrolled, setPageScrolled] = useState(false)

   const currentUser = useSelector(state => state.user.currentUser)

   useEffect(() => {
      const handleScroll = () => {
         setPageScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div className={`${styles.header} ${pageScrolled && styles.headerScrolled}`}>
         <div className={styles.container}>
            <p className={styles.logo}><Link to='/'>Wortschatz</Link></p>
            <Search />
            <nav>
               <ul className={styles.navList}>
                  <li className={styles.navItem}><Link to="/lesson/parameters" cl>Learn</Link> </li>
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