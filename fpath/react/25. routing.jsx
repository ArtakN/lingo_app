/* to open other pages we need create Routing, for this we need to install 
   react-router-dom   

      npm install react-router-dom@6       */

// in App.jsx we import destucturing react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/Home'
import Wallet from './components/Wallet'
import NotFound from './components/NotFound'

function App() {
   <BrowserRouter>
      <Routes>
         {/* INSIDE <Routes></Routes> MUST BE ONLY <Route,
         not allowded to write any other component, even 
         <div></div> /> */}
         <Route path='/' element={<Home />} />
         <Route path='/pizzas/wallet' element={<Wallet />} />
         <Route path='/pizzas/:id' element={<Pizzas />} />

         <Route path='*' element={<div>Not found</div>} />
      </Routes>
   </BrowserRouter >
}
/* every <Route /> is a new url address, 

   <Route path='/' element={<Home />} />  this means that if url address ending with / , it will open <Home /> component

   <Route path='/pizzas/wallet' element={<Wallet />} />  this means that Wallet component will be opened only if url address will be exactly /pizzas/wallet

   <Route path='/pizzas/:id' element={<Wallet />} /> this is a dynamic unic, it means that in url address need to be /pizzas/(something is here) - it doesn't matter what, any address like this will open Pizzas component    

   <Route path='*' element={<div>Not found</div>} /> if the page will not be found (url addres doesn't match with one of paths above), it will show 'Not found'. We can also create a NotFound component and show here 
   element={<NotFound />}     */
// =============================================================================

// =============================================================================
// For better practice we will put in index.js or main.jsx <BrowserRouter> 
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter >
         <App />
      </BrowserRouter>
   </React.StrictMode>,
)

// in this case in App.js need to write without <BrowserRouter>
import { Routes, Route } from "react-router-dom"

import Home from './components/Home'
import Wallet from './components/Wallet'
import NotFound from './components/NotFound'

function App() {
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pizzas/wallet' element={<Wallet />} />
      <Route path='/pizzas/:id' element={<Wallet />} />

      <Route path='*' element={<NotFound />} />
   </Routes>
}
// =============================================================================

// =============================================================================
// We have a header component that we need to show with every page, it will not be changed when we change pages

import { Routes, Route } from "react-router-dom"

import Home from './components/Home'
import Wallet from './components/Wallet'
import NotFound from './components/NotFound'

function App() {
   <div className="wrap">
      {/* we will use it out of rotes, because inside <Rotes></Rotes>
         component we can't use any other element insted of Route. */}
      <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/pizzas/wallet' element={<Wallet />} />
         <Route path='/pizzas/:id' element={<Wallet />} />

         <Route path='*' element={<NotFound />} />
      </Routes>
   </div>
}
// =============================================================================

// =============================================================================
// To go to the home page on logo click, we need to
import logo from '../assets/pizza.png'
import styles from './header.module.scss'

export default function Home() {
   return <div className={styles.header}>
      <a href="/">
         <img className={styles.logo} src={logo} alt="syte logo" />
      </a>
      <a href="/wallet">
         <p>Wallet</p>
      </a>
   </div>
}
/* in this case if we click on logo, on address input we will get "/"" and it
   will open Home page becase of this rout

      <Route path='/' element={<Home />} />

   if we click on wallet, in address input we will get "/wllet", it will go to wallet page, because of this rout

      <Route path='/pizzas/wallet' element={<Wallet />} />

   *****************************************************************************
   But if we use <a href=""></a> to change pages, page will be loded during it
   *****************************************************************************

   not to load the page we need to use <Link to=""> instead <a href="">, to use Link we need to import it from react-router-dom   */
import { Link } from "react-router-dom"

export default function Home() {
   return <div className={styles.header}>
      <Link to="/">
         <img className={styles.logo} src={logo} alt="syte logo" />
      </Link>
      <Link to="/wallet">
         <p>Wallet</p>
      </Link>
   </div>
}
// and now pages will be changed without reload

/*******************************************************************************
   absolute and relative paths
   
      <Link to="/wallet"></Link>    (/wallet)

            and

      <Link to="wallet"></Link>     (without)

    Link with "/wallet" is a absolute path. No matter where you currently are in your application, clicking this link will take you to /wallet.

   Link with "wallet" is a relative path. If you’re currently on a route like 
   /user, clicking this link will take you to /user/wallet.
 ******************************************************************************/

// =============================================================================
/* when we go from one page to any other, scroll page to end go to any other 
   3rd page, the 3rd page will be scrolled to the end, too. To go to the top on the new page, we need to write   */

export default function Home() {

   useEffect(() => {
      fetch("https://646fcd6809ff19b12087c5c4.mockapi.io/items")
         .then(response => response.json())
         .then(data => {
            setPizzas(data)
            setIsLoading(false)
         })
      // this is a js code for go to the top, we put it in useEffect and now
      // it will work only once, on the first page render 
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
      </>
   )
}
// =============================================================================

// =============================================================================
// ************  children props in Routhing ******************

import { Routes, Route, Navigate } from 'react-router-dom'


function App() {

   const currentUser = false

   // inside the App component we created a new component that gets children as props, inside the component we check if currentUser is true then we render children component, if not we navigate to the login page
   function RequireAuth({ children }) {
      return currentUser ? children : <Navigate to='/login' />
   }


   // here we set wrapped user pages (Dahsboard and Settings) with RequiredAuth component, if currentUser is true, then ReqiredAuth's children components (<Dashboard /> and <Settings />) will be rendered, else navigated to login  
   return (
      <div className='app'>
         <Header />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<RequireAuth>
               <Dashboard />
            </RequireAuth>} />
            <Route path='/settings' element={<RequireAuth>
               <Settings />
            </RequireAuth>} />
         </Routes>
      </div>
   )
}
// =============================================================================
