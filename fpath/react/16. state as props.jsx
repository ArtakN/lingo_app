/*
   passing state as props
   setting state from child component
*/

// =============================================================================
// Passing state as props

/* We have already learned how to use props for a component to be able to 
   recieve values and we have learned about state, a component declares own values that are changed and update UI whan those chanes are happen. And now we are combining these 2 concepts. We inishalizing state inside our component and passing that state value to a child component, and chiled compnent receives that value as props. And we will have a cascading effect here - every state changes will rerender the component in wich the state is declared and any children components of this component. */
// =============================================================================

// =============================================================================
// Setting state from child component

import React from "react"
import Star from "./Star"

function App() {

   const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true
   })

   // 1. we created "toggleFavorite" function in App.js, which modifies the state
   function toggleFavorite() {
      setContact(prevContact => ({
         ...prevContact,
         isFavorite: !prevContact.isFavorite
      }))
   }

   return (
      <main>
         <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
               {/* 2. we passed "toggleFavorite" function to our custom component "Star" in a custom props "handleClick" */}
               <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
               <h2 className="card--name">
                  {contact.firstName} {contact.lastName}
               </h2>
               <p className="card--contact">{contact.phone}</p>
               <p className="card--contact">{contact.email}</p>
            </div>

         </article>
      </main>
   )
}

// Star.jsx  

// 3. our custom componen "Star" receiving "handleClick" in props 
function Star({ handleClick }) {

   return (
      <img
         className="card--favorite"
         /* 4. it registering an ivent onClick listener, whoes functional value 
            is the fanction we recieve from the props it gives opporunity to change the state from child component. now we can change the state from Star component: when we click on the image of Star component, it will call handlcklick function in App component, which will call toggleFavorite function and change the state. */
         onClick={handleClick}
      />
   )
}

export default Star;
// =============================================================================