import styles from './Header.module.scss'
import Search from './Search'
import UserMenu from './UserMenu'
import MobileMenu from './MobileMenu'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {

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
            <div className={styles.searchWrapper}>
               <Search />
            </div>
            <nav className={styles.desktopMenu}>
               <ul className={styles.navList}>
                  {
                     !currentUser ?
                        <li className={styles.navItem}><Link to="/login" >Lesson</Link> </li>
                        :
                        <li className={styles.navItem}><Link to="/lesson/parameters" >Lesson</Link> </li>
                  }
                  <li className={styles.navItem}><Link to="/allwords">All words</Link></li>
               </ul>
               {
                  !currentUser
                     ?
                     <div className={styles.userAuth}>
                        <div className={styles.logIn}><Link to="/login">Log in</Link></div>
                     </div>
                     :
                     <UserMenu />
               }
            </nav>
            <MobileMenu />
         </div>
      </div>
   )
}

export default Header