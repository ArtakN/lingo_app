function App() {

   const thingsArray = ["Thing 1", "Thing 2"]

   // when the 'Add item' button is clicked we add new elements in the thingsArray array 
   function addItem() {
      const newThingText = `Thing ${thingsArray.length + 1}`      // Thing ${2 + 1} --> Thing 3
      thingsArray.push(newThingText)
   }

   return (
      <div>
         <button onClick={addItem}>Add Item</button>
      </div>
   )
}

/* There is one problem here - we added new elements in the array, but it
   is not posible to render them, because the document was rendered once at
   the begining, and at the top we determined our array and it saved in memory.
   New elements were added after the button click but document doesn't
   rerender the page after every butoon click, so they will not be screened.

   In JS we could solve the problem by adding some code in the function:

      document.getElementById('get container element for these items')
      then pushing new elements to the list with innerHtml.

   It would rerender the page, and new elements will be rendered.

   But as we know React is declarative. It means that React will automaticaly
   react to the change and update our UI to display what have changed in the data.

   For that work we need to access something called State. And State will allow
   us to sort of Hook into the component and make its that whenever we update our state we choose really just values or saving inside of this component, it makes React update UI based on any changes that happens to this values being saved in the state.
   Any of this inractions in React are going to be updating state. Which then
   makes React can update UI to responce you however you interact the page.

   In React values that are created by the function of the component itself are
   usually held on state.    */
// =============================================================================

// =============================================================================
/* props vs state

   1. How would you describe the concept of "state"?

         A way for React to remember saved values from within a component.
         This is similar to declaring variables from within a component,
         with a few added bonuses (which we'll get to later)

   2. When would you want to use props instead of state?

         Anytime you want to pass data into a component so that
         component can determine what will get displayed on the
         screen.

   3. When would you want to use state instead of props?

         Anytime you want a component to maintain some values from
         within the component. (And "remember" those values even
         when React re-renders the component).

   4. What does "immutable" mean? Are props immutable? Is state immutable?

         Immutable means Unchanging.

         Props are immutable.
         State is mutable.    */
// =============================================================================