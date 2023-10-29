/*
   State is an array
   State is an object
*/

// =============================================================================
// State is an array

import React, { useState } from 'react';

function App() {

   // in this example state is an array
   const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

   // We need to add new elements in the array by clicking on the "Add item" button

   function addItem() {

      // setThingsArray(thingsArray.push(`Thing ${thingsArray.length + 1}`)

      /* This is not a correct method to pass elements to the state with push method, because we are going to modify the state, but we know that we can't modify the state directly. So we need to use a callback function here.    

         we can try to solve the problem like this, 

            setThingsArray(prevThingsArray => prevThingsArray.push(`Thing ${prevThingsArray.length + 1}`))

      ***but this in not correct, too. Because here the state is an array
         (array is an object), and when we use prevThingsArray it is still reference to the inital state thingsArray, and modifying prevThingsArray, actually we are changing thingsArray.   */

      // we need to return a new version of state (copy it), and only then create a change in the copy
      setThingsArray(prevThingsArray => {
         //*** as you see we don't use push() operator to add new items in a array when we use spread operator
         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
         /***  whatever we return in this callback function will become the new
               state it means that the new copy of the state that was modified will be the new state  */
      })
   }

   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

   return (
      <div>
         <button onClick={addItem}>Add Item</button>
         {thingsElements}
      </div>
   )
}
// =============================================================================

// =============================================================================
// State is an object

// in this example state is an object
function App() {

   const [contact, setContact] = useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true
   })

   return (
      <div className="card--info">
         <h2 className="card--name">
            {/*   as we see, here we use the state directly. 
                  If we don't modify the state we don't need to copy it and can use it diractly.   */}
            {contact.firstName} {contact.lastName}
         </h2>
         <p className="card--contact">{contact.phone}</p>
         <p className="card--contact">{contact.email}</p>
      </div>
   )
}

// -----------------------------------------------------------------------------

// Updateing state object

function App() {

   // state is an object
   const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true
   })

   let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

   // we want to flipp isFavorite back and forth on click Toggle button
   function toggleFavorite() {
      setContact(prevContact => {
         /***  
                  return {
                     isFavorite: !prevContact.isFavorite
                  }

               there is a big mistake in this function

               We know that, whatever we return in this callback function
               it will become the new state.
         
               Here we return only "isFavorite" property of the state object.
               And our new state will be a new object with 1 property:
          
                  {IsFavorite: false}    
         
               If we click the button, all other used properties of the state
               will disappeared.   */
      })
   }
}

// how to fix it

function toggleFavorite() {
   setContact(prevContact => {
      /***  We need to copy the object state at first, and only then modify any
            property we need. We will do that with spread operator.  */
      return {
         ...prevContact,
         isFavorite: !prevContact.isFavorite
      }
   })
   /***  so we copied all the properties of the state (Contact object), and then we overwrited isFavorite property. We could wrote this syntex, too:
           
      function toggleFavorite() {
         setContact(prevContact => {
            return {
               firstName: "John",
               lastName: "Doe",
               phone: "+1 (719) 555-1212",
               email: "itsmyrealname@ example.com",
               isFavorite: false 
         }  
      })  
                                           
   we will not get a syntex error here, it will work but we will use the spread operator, insted of this type writing.  */
}
// =============================================================================