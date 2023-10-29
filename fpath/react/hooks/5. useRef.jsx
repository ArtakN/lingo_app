/* useRef() hook used to interact with real dom elements

   returns an object with a single property: 
   
      current: Initially, it’s set to the initialValue you have passed. 

   We can later set it to something else. */

import { useRef } from 'react';

function Stopwatch() {
   const intervalRef = useRef(0);
}
// here we will have {current: 0}

// if we dont set inital value like this
import { useRef } from 'react';

function Stopwatch() {
   const intervalRef = useRef();
}
// the inital value of current will be undefined: {current: undefined}

// it is like useState but there is a big difference - changing a ref does not trigger a re-render.

// -----------------------------------------------------------------------------

// Manipulating the DOM with a ref 

/* It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.

First, declare a ref object with an initial value of null:  */
import { useRef } from 'react';

const inputRef = useRef(null);

// Then pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate: 
<input ref={inputRef} />;


// aAfter React creates the DOM node and puts it on the screen, React will set the current property of your ref object to that DOM node. Now you can access the <input>’s DOM node and call methods like focus():    * /
function handleClick() {
   inputRef.current.focus();
}
// React will set the current property back to null when the node is removed from the screen.

// -----------------------------------------------------------------------------

// example of use the useRef hook:

// we want to save focus on Search input after clicking search_clear button 
export default function Search() {

   const onClickClear = () => {
      setSearchValue('')
      // with this code we get control of real document element input and save focus on Search input
      document.querySelector('input').focus()
      // but this is not react, this is javascript, and we will not use this type interaction with dom elements in react, because sometimes we can have not the expected result: read at the bottom
   }

   return (
      <div className="search">
         Search
      </div>
   )
}

// To interact with real dom elements in React we will use useRef() hook
import { useRef } from "react"

export default function Search() {
   // here we created an referance(ссылка)
   const inputRef = useRef()

   /** on clearButton click we changed the input focus. It is very importent 
      thing, it means we can change an element depending of the other element */
   const onClickClear = () => {
      setSearchValue('')
      inputRef.current.focus()
   }

   return (
      <div className="search">
         <input ref={inputRef} />
      </div>
   )
}