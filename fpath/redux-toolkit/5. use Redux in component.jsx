/* Use Redux State and Actions in React Components

   Now in component we import useSelector and useDispatch React-Redux hooks to let React components interact with the Redux store.   */
import { useSelector, useDispatch } from 'react-redux'
// -The "useSelector" hook is used to get state from the Redux store. 
// -The "useDispatch" hook is used to dispatch actions to the Redux store.

/*** dispatch is a method of the redux store, if we console log the store we 
    will see the dispatch method inside it. Redux library is a js library, 
    so dispatch stored in js and we could get dispatch method like this:
    
      store.dispatch
   
   but this is not a good way to get dispatch, we will use useDispatch hook to get dispatch. we get useDispatch hook from react-readux library, react-readux library is not a js library, js library doesn't have hooks, it is a react library.  */

// We also import the decrement, increment and incrementByAmount actions from the counterSlice slice.
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
   // we get state from store with "useSelector" hook. 

   /* here we get hole state from the store, it is an object.
         {
            counter: {value: 0}

            any other state will be here
         }
   then from the state we get counter and from the counter we get value. We named this part of state "value" in the counterSlice, if we named it "count", we need to write here state.counter.count    */
   const count = useSelector((state) => state.counter.value)
   /* if we here need more than one state, we need to creaete one more state 
      here, for example: 
         const sort = useSelector((state) => state.counter.sort.sortId)
      
      or we can do desturucturization:
       
         const {value, sort} = useSelector((state) => state.counter) */
   const dispatch = useDispatch()

   // we use here local state to keep amount, it’s perfectly fine to use local state with Redux. 
   const [amount, setAmount] = useState(0)
   // Redux is great for managing global state - state that is needed across many parts of your application. However, not all state needs to be global. If a piece of state is only used within one component (or a small part of your component tree), it might be simpler to just use local component state with the useState hook.

   return (
      <div>
         <div>
            <button
               aria-label="Increment value"
               // Now on button click it will dispatch an action.
               onClick={() => dispatch(increment())}
            /* Detailed description: 
         
            -On button click the onClick handler function is called. 
            -Then the onClick handler function dispatches the increment  
             action to the Redux store using useDispatch() hook. 
            -Inside dispatch hook we use increment() action creator that  
             creates increment action, 
            -the increment action will be like:

               action increment {
                  type: "counter/increment",
                  payload: undefined
               }

            -Then the counter reducer in the store will see the action 
               and update its state using counterSlice slice.
            -Then the <Counter> component will see the new state value 
               from the store and re-render itself with the new data. */
            >
               Increment
            </button>
            <span>{count}</span>
            <button
               aria-label="Decrement value"
               onClick={() => dispatch(decrement())}
            >
               Decrement
            </button>
            <div className="amountBlock">
               {/* we have an input and we can write a number here and add to the count */}
               <input
                  value={amount}
                  className="button"
                  style={{ marginRight: "8px" }}
                  onChange={(e) => setAmount(e.target.value)}
               />
               {/* on button click it will dispatch incrementByAmount action to 
                  the redux store. incrementByAmount action is created by incrementByAmount action creator. Action is an object 
                  and it has 2 properties: type and payload. 
                  The type property is a string that identifies the action.
                  The payload property contains the value that was passed as an argument when dispatching the action. 
                  For example, if we dispatch an action like this: 

                     dispatch(incrementByAmount(5)), 

                  then the dispatched action will be like:

                     action incrementByAmount {
                        type: "counter/incrementByAmount",
                        payload: 5
                     } 

                  */}
               <button
                  onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
                  className="button"
               >
                  Add
               </button>
            </div>
         </div>
      </div>
   )
}
// =============================================================================

// =============================================================================
// if we will use in one component two or more state,  
const sort = useSelector((state) => state.filter.sort)
const category = useSelector((state) => state.filter.type)
// we can write it in one line with desturucturation
const { sort, category } = useSelector((stete) => state.filter)
// =============================================================================













// to interact with the state in store.js from the components we will import useSelector() and useDispatch() hooks to the component 

// we will use filter state in Home.jsx
import { useSelector, useDispatch } from "react-redux";
// and we will import our actions
import { setCategoryId, setSort } from "./2. slice";
import { useState } from 'react'

export default function Home() {
   // width useDispatch() hook we will change the state 
   const dispatch = useDispatch()
   // width useSelector() hook we will get the state. we will get exact part of state, in this case we will get categoryId
   const categoryId = useSelector((state) => state.filter.categoryId)
   // and here we will get state of sort
   const sort = useSelector((state) => state.filter.sort)

   // when we click on category, setSelectedCategory method will be disaptched 
   const onChangeCategory = (id) => {
      dispatch(setSelectedCategory(id))
   }
   // when we click on sort, setSelectedSort method will be disaptched 
   const onChangeSort = (id) => {
      dispatch(setSelectedSort(id))
   }


   useEffect(() => {
      setIsLoading(true)
      fetch('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
         .then((res) => res.json())
         .then((data) => {
            setCards(data)
            setIsLoading(false)
         })
   }, [selectedCategory])

   return (
      <div className={styles.main}>
         <Categories selectedCategory={selectedCategory} changeCategory={onChangeCategory} />
         <div>
            <Banner />
            <div className={styles.productContainer}>
               <p className={styles.productTitle}>Products</p>
               <Sort selectedSort={selectedSort} changeSort={onChangeSort} />
               <div className={styles.products}>
                  {cards.map((card) => isLoading ? <ProductCardSkeleton /> : < ProductCard key={card.id} {...card} />)}
               </div>
            </div>
            <div className={styles.pagination}>
               Pagination
            </div>
         </div>
      </div >
   )
}