/*
   props drilling
   context
*/

// =============================================================================
/* Props Drilling

   when we pass data in props it calls props drilling the best practice is to pass data in props from parent component to the chiled component, the max level is to the Grandchild component (consist of how big is data, how big is the project), but not deeper.*/

// here in App.js we used props drilling
import { useState } from "react"

export default function App() {
   const [searchValue, setSearchValue] = useState('')

   return (
      <div className={styles.wrapper}>
         {/* here we drilled "searchValue" and "setSearchValue": 
            at first we passed them into the <Header /> component, 
            then from <Header /> component into the <Search /> component.   */}
         <Header searchValue={searchValue} setSearchValue={setSearchValue} />
         <div className={styles.contentContainer}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/item/:id' element={<ProductPage />} />

               <Route path='*' element={<NotFound />} />
            </Routes>
         </div>
      </div>
   )
}
// =============================================================================

// =============================================================================
// useContext

// We will use Context to pass data deeply into the tree without props drilling

// -----------------------------------------------------------------------------

// 1. Create Context

import { createContext, useState } from "react"

// At first we need to create a Context with createContext() hook, end export it
export const SearchContext = createContext('')

// Context is an object. The object has "Provider" property, it is a component.

export default function App() {
   const [searchValue, setSearchValue] = useState('')

   return (
      <div className={styles.wrapper}>
         {/* SearchContext is an object (not a component), but it's Provider property is a component. we wrapper our components with Provider compoennt and set the data that we want to provied to the value={...} in <SearchContext.Provider>. All the components inside SearchContext. Provider now can use the context value */}
         <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {/* we use double {{}}, because we set here an object */}
            <Header />
            <div className={styles.contentContainer}>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/item/:id' element={<ProductPage />} />

                  <Route path='*' element={<NotFound />} />
               </Routes>
            </div>
         </SearchContext.Provider>
      </div>
   )
}

// -----------------------------------------------------------------------------
// Use Context

// Now we can use the context in the <Search></Search> component insted props drilling, for this we will use useContext() hook in Search component
import { useContext } from "react"
import { SearchContext } from '../../App'

export default function Search() {
   /* with useContext() hook we will get SearchContext value
      the magic is here we will get searchValue, setSearchValue diractly from
      the App component, without using Header component.   */
   const { searchValue, setSearchValue } = useContext(SearchContext)
   /* we use here "object destructuring assignment", and it will be like this: 
      
         const searchValue = SearchContext.searchValue
         const setSearchValue = SearchContext.setSearchValue  */

   return (
      <>
         <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
      </>
   )
}

/* it is like event listener, in those components that we will use useContext,
   we say that they need to listen changes for SearchContext, and do rerender as soon as it changes */
// =============================================================================
