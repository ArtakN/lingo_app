// Forms in React

/*
   In JS we fill the form and then click the "Submit" button.
   It will gather all the data and at the very end of the process submit the form.

   This is different from the React. The main difference is instead of processing the from at the very end after the form filling, submitting and gathering all the data, we create state and every form change (key stroke (letter change in imput), checkbox, radio button ...) we update state. Then when the time to submit comes we have no more work to be done,
   because we already have gathered the data. 
 */

// we have a form with "First Name" input here
function Form() {
   // we created a state
   const [firstName, setFirstName] = useState("")

   // 2. we pass the event object here, it is a big object with a lot of properties and methods
   function handleChange(event) {
      // 3. state will be updated after any change of the input  
      setFirstName(event.target.value)
   }

   return (
      <form>
         <input
            type="text"
            placeholder="First Name"
            // 1. we created a change event listener here, it will track every change in the input 
            onChange={handleChange}
         />
      </form>
   )
}

// -----------------------------------------------------------------------------

// But what if we have more than one input

// here we have 2 inputs - "firstName" and "lastName" 
function Form() {
   // 1. if we have more than one input, we need to use an object for these inputs in the state 
   const [formData, setFormData] = useState({ firstName: "", lastName: "" })

   // 3.1. we created a function that will be invoked after any change in the inputs
   function handleChange(event) {
      /* 4. as we know we can't change the state directly, so we need to copy the state at first. for this we need a callback function here, in whick we will pass prevFormData (previous FormData) as a parameter.    */
      setFormData(prevFormData => {
         return {
            // 4.1. here we copy the full state by spread operator
            ...prevFormData,
            /* 4.2. and than create the necessary changes, 
                  for [event.target.name] we use [], because it is necessary 
                  (in ES6 this fitch called competed properties) when we use . 
                  in a key name in a object  */
            [event.target.name]: event.target.value
         }
      })
   }

   return (
      <form>
         <input
            type="text"
            placeholder="First Name"
            /* 3. we created a onChange event listener to track the inputs 
                  and after any change in these inputs to call the handleChange 
                  function. For all the inputs we call the same function  */
            onChange={handleChange}
            /* 2. every input must have a name attribute, we need it to 
                  determin the input 
               ***the property for `name` atribute should match the property 
                  name being held in state for that input ("firstName")   */
            name="firstName"
         />
         <input
            type="text"
            placeholder="Last Name"
            /* 3. we created a onChange event listener to track the inputs 
                  and after any change in these inputs to call the handleChange 
                  function. For all the inputs we call the same function */
            onChange={handleChange}
            // 2. every input must have a name attribute, we need it to determin the input
            name="lastName"
         />
      </form>
   )
}
// =============================================================================

// =============================================================================
// Controlled inputs (controlled components)

/* In HTML, form elements such as <input>, <textarea>, and <select> typically 
   maintain their own state and update it based on user input. 
   In React, mutable state is typically kept in the state property of components, and only updated with setState().  
   
   We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controlls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component” */

function Form() {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: ""
   })

   function handleChange(event) {
      setFormData(prevFormData => {
         return {
            ...prevFormData,
            [event.target.name]: event.target.value
         }
      })
   }

   return (
      <form>
         <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            /* Since the value attribute is set on our form element, the      
               displayed value will always be this.state.value, making the React state the only source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
               
               With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers. */
            value={formData.firstName}
         />
         <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
         />
      </form>
   )
}
// =============================================================================

// =============================================================================
// Textarea, Checkbox, Radio button, Select & Option, Submit button

function Form() {
   const [formData, setFormData] = React.useState(
      {
         firstName: "",
         lastName: "",
         email: "",
         comments: "",
         isFriendly: false,
         employment: "",
         favColor: ""
      }
   )

   function handleChange(event) {
      /* we get all of those from event.target target represents the element that is modify in the event   */
      const { name, value, type, checked } = event.target
      setFormData(prevFormData => {
         /* we return an object, this object should have all of the properties of the prevFormData, 
            but we want to update the property based on the name value that we pulled from input 
            that is makeing this change   */
         return {
            ...prevFormData,
            /* we use here compited property syntex from ES6 []
               the value of name noramlly should be value ([name]: value), if we don't have checkbox
               beacause all of our other inputes updating "value" property on the input itself
               however because we do have the chekcbox we are going to check 
               if the "type" is "checkbox", and if it is then we want to set the "checked" property of
               the chekcbox, if not then we can use the value property update our state  */
            [name]: type === "checkbox" ? checked : value
         }
      })
   }

   /* because our submit button is inside the form element, it acts as a submit button automatically
      so clicking the submit button will trigger submit event of the form and ran the this function */
   function handleSubmit(event) {

      /* writing this the page will be updated without loading
         this is always going to be the first thing that we will do at the top of handleSubmit function  */
      event.preventDefault()

      /* This is copied from another function to show where we will write any other js logic in this function.
         When the user clicks "Sign up", check if the password & confirmation match each other. 
         If so, log "Successfully signed up" to the console. If not, log "passwords to not match" 
         to the console.  */
      formData.pass === formData.confirmPass ?
         console.log("Successfully signed up") :
         console.log("passwords do not match")

      /* Also when submitting the form, if the person checked the "newsletter" checkbox, 
         log "Thanks for signing up for our newsletter!" to the console. */
      formData.isFriendly && console.log("Thanks for signing up for our newsletter!")
   }

   return (
      /* we set an onSubmit event listener in form element, which will run the 
         handleSubmit function after clicking on the submit button  */
      <form onSubmit={handleSubmit}>

         {/* Text inputs */}
         <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
         />
         <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
         />
         <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
         />

         {/*   Textarea:
                  in HTML, texarea tag we write this way <textarea></textarea> but in React we
                  will like this <textarea />, the rest atributes we pass the same like in input.  */}
         <textarea
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
         />

         {/* Chackbox
               checkbox dosn't have a "value" attribute, instead of it has "checked" attribute  */}
         <input
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
         />
         {/* insted for property in HTML, in react we write htmlFor property */}
         <label htmlFor="isFriendly">Are you friendly?</label>

         <br />

         {/* Radio button */}
         <fieldset>
            <legend>Current employment status</legend>
            <input
               type="radio"
               id="unemployed"
               name="employment"
               value="unemployed"
               checked={formData.employment === "unemployed"}
               onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
               type="radio"
               id="part-time"
               name="employment"
               value="part-time"
               checked={formData.employment === "part-time"}
               onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
               type="radio"
               id="full-time"
               name="employment"
               value="full-time"
               checked={formData.employment === "full-time"}
               onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
         </fieldset>

         <br />

         {/* Select & Option */}
         <label htmlFor="favColor">What is your favorite color?</label>
         <br />
         <select
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
         >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
         </select>

         <br />

         {/* Submit button
               any button element inside a form will automaticly act as a submit button for that form. to stop it we need to change button type="button", is it ok for react?  */}
         <button>Submit</button>
      </form>
   )
}
// =============================================================================

// =============================================================================
/*
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

      Right before the form is submitted.

2. In a React app, when do you gather all the data from
   the filled-out form?

      As the form is being filled out. The data is all held in local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?

      `name` property.

4. What's different about saving the data from a checkbox element
   vs. other form elements?

      A checkbox uses the `checked` property to determine what should
      be saved in state. Other form elements use the `value` property instead.

5. How do you watch for a form submit? How can you trigger
   a form submit?

      - Can watch for the submit with an onSubmit handler on the `form` element.
      - Can trigger the form submit with a button click.
*/
// =============================================================================
