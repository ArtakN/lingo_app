import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, decrementInputedValue } from '../../redux/slices/counterSlice'
import { useState } from 'react'


function Home() {

   const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch()

   const [inputValue, setInputValue] = useState(0)

   return (
      <div className={styles.home}>
         <div className={styles.container}>
            Home Page
            <div className={styles.count}>
               <button onClick={() => dispatch(decrement())}> - </button>{count}<button onClick={() => dispatch(increment())} > + </button>
            </div>
            <div>
               <input type="text" value={inputValue} onChange={(event) => setInputValue(Number(event.target.value))} />
               <button onClick={() => dispatch(decrementInputedValue(inputValue))}>Add count</button>
            </div>
            <div className={styles.container}>
               <Link to='/settings'>Settings</Link>
            </div>
         </div>
      </div >
   )
}

export default Home