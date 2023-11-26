import styles from './Header.module.scss'
import Search from './Search'
import UserMenu from './UserMenu'
import MobileMenu from './MobileMenu'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {

   const [pageScrolled, setPageScrolled] = useState(false)
   const [searchVisable, setSearchVisable] = useState(true)

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

   function handleMobileSearch() {
      setSearchVisable(prevSearchVisable => !prevSearchVisable)
   }

   return (
      <div className={`${styles.header} ${pageScrolled && styles.headerScrolled}`}>
         <div className={styles.container}>
            <p className={styles.logo}><Link to='/'>Wortschatz</Link></p>
            <div className={styles.mobileSearchIcon} onClick={handleMobileSearch}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
                  <path d="M9.36408 0C4.21233 0 0.0351562 4.17718 0.0351562 9.32896C0.0351562 14.4807 4.21233 18.6579 9.36412 18.6579C11.3452 18.6579 13.1824 18.04 14.6926 16.9875L14.6937 16.9864L21.6125 23.9052C21.7409 24.0336 21.945 24.0369 22.0767 23.9052L23.9414 22.0405C24.0698 21.9121 24.0633 21.6992 23.9404 21.5763L17.0226 14.6585C18.0751 13.1472 18.693 11.31 18.693 9.32896C18.693 4.17718 14.5159 0 9.36408 0ZM9.36408 16.4629C5.42396 16.4629 2.23017 13.2691 2.23017 9.32896C2.23017 5.38884 5.424 2.19506 9.36408 2.19506C13.3042 2.19506 16.498 5.38884 16.498 9.32896C16.498 13.2691 13.3042 16.4629 9.36408 16.4629Z" fill="black" />
               </svg>
            </div>
            <div className={`${styles.searchWrapper} ${searchVisable && styles.mobileSearchVisable}`}>
               <Search />
               <button className={styles.closeSearch} onClick={handleMobileSearch}>Cancel</button>
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