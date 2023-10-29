/* 
   Props
      destucturing props
      default value for a prop
      non-string props
      children prop
      props immutable

      How to pass props to a component
      How to read props from a component
      How to specify default values for props
      How to pass some JSX to a component
      How props change over time 
*/

//==============================================================================
// we create number function
function number() {
   1 + 3
}

// we will have the same result every time we call this function
number() // -> 4
number() // -> 4

// but we can create a reusable function passing paramters in it
function number(a, b) {
   a + b
}

// and now we will get different result, passing different arguments to the function
number(2, 8) // -> 10
number(3, 5) // -> 8
//==============================================================================

//==============================================================================
// Props is an object, wich is needed to pass some data to the components.

/* Every parent component can pass some information to its child components by 
   giving them props. We can pass any JavaScript value through props, including objects, arrays, and functions. */

// Hier we have a Contact component (we know that component is a function)
function Contact() {
   return (
      <>
         <h1>Artak NAvoyan</h1>
         <p>Phone nummer: +48888888</p>
      </>
   )
}

// in App component we render (call) Contact component twice, and we will get the same result twice
function App() {
   return (
      <div className="contacts">
         <Contact />
         <Contact />
      </div>
   )
}

//------------------------------------------------------------------------------

// to get different results we need to use props

// here we pass information to child components with props (like arguments for common functions)
function App() {
   return (
      <div className="contacts">
         <Contact name="Artak" lastName="Navoyan" phoneNumber="+48888888" />
         <Contact name="David" lastName="Navoyan" phoneNumber="+47777777" />
      </div>
   )
}

/* props is a object, and the passed imformation will be like this  

   {
      name: Artak,
      lastName: Navoyan,
      number: +48888888
   }

   {
      name: David,
      lastName: Navoyan,
      number: +47777777
   }
*/

// and in child component we use the props 
function Contact(props) {
   return (
      <>
         <h1>{props.name} {props.lastName}</h1>
         <p>{props.phone}</p>
      </>
   )
}
//==============================================================================

//==============================================================================
// Destucturing props

// Usually we don’t need the whole props object itself, so we can destructure it into individual props.
function Contact({ name, lastName, phone }) {
   return (
      <>
         <h1>{name} {lastName}</h1>
         <p>{phone}</p>
      </>
   )
}

// destucturing is equivalent to reading properties from a function parameter
function Contact(props) {

   // like this
   let name = props.name
   let lastName = props.lastName
   let phone = props.phone

   return (
      <>
         <h1>{name} {lastName}</h1>
         <p>{phone}</p>
      </>
   )
}
//==============================================================================

//==============================================================================
// default value for a props

// as parameters in common function, props can have default value, too.
function Contact({ name = "Boss", lastName, phone }) {
   return (
      <>
         <h1>{name} {lastName}</h1>
         <p>{phone}</p>
      </>
   )
}

// now if in parent component, Contact component rendered without name prop, the name will be set Boss
function App() {
   return (
      <div className="contacts">
         <Contact lastName="Navoyan" phone="+48888888" />
         <Contact name="David" lastName="Navoyan" phone="+47777777" />
      </div>
   )
}
/* The default value is only used if the name prop is missing or if we pass 
   name={undefined}. 
   But if we pass name={null} or name={0} or name={''} the default value will not be used.*/
//==============================================================================

//==============================================================================
// Non-string propos

// we learned how to pass string props in a component
<Dialog
   person1="Hi!"
   person2="Hello!"
/>

// but what if we want to pass non-string props for example a number or an array
import avatar from './assets/avatar.png'

<Dialog
   // string
   person1="Hi!"
   // number
   likesCount={88}
   // boolian
   isGoodDialog={true}
   // array
   comments={['the best', 'nice', 'joke']}
   // object
   age={{ first: 12, second: 37 }}
   // variable (we created it on the top with import)
   img={avatar}
/>
//==============================================================================

//==============================================================================
// children props

/* When we nest content inside a JSX tag, the parent component will receive 
   that content in a prop called children. For example, we nested Avatar component inside Card component below:   */
function Profiel() {
   return (
      <Card>
         <Avatar />
      </Card>
   );
}

// Card component will receive a children prop set to <Avatar /> and render it. 
function Card({ children }) {
   return (
      <div className="card">
         {children}
      </div>
   );
}
// if we don't write the {children} prop, Avatar component won't be rendered

// we can put any content inside Card component
function Profiel() {
   return (
      <Card>
         <h1>Photo</h1>
         <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
         />
      </Card>
   );
}
//==============================================================================

//==============================================================================
// incoming props always are immutable

// Props are read-only snapshots in time: every render receives a new version of props.

// we only can use props and not change them
function Navbar(props) {
   props.coverImage = "something else" // this is not correct
}
// we can't write props equal something, always something need to be equal props

// But it can change the values that I pass to my components
<Navbar img="katye.png" />    // here I allowed change katye.png

// but in the body of the function I should never ever change my props
// the same is about the parameters for a function
function addTwoNumbers(a, b) {
   a = 42   // Don't do this!
   return a + b
}
//==============================================================================

//==============================================================================
// Recap

/* To pass props, add them to the JSX, just like you would with HTML attributes.
   To read props, use the function Avatar({person, size}) destructuring syntax.
   You can specify a default value like size = 100, which is used for missing and undefined props.
   You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
   Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
   Props are read-only snapshots in time: every render receives a new version of props.
   You can’t change props. When you need interactivity, you’ll need to set state.   */
//==============================================================================

//==============================================================================
// but there can be a situation that we need to add an image by path (not by import)
function App() {
   return (
      < Card
         /* here we pass only the image name (not path) as a string.
            Because path to the image from App and Card components are not the same.  */
         img="katie-zaferes.png"
      />
   )
}

// how to use img prop? 
function Card(props) {
   return (
      // by interpolation: in backticks we write the path and then add image name from props
      <img src={`../images/${props.img}`} className="card__image" />
   )
}
//==============================================================================

//==============================================================================
// Destructuring props

// we pass some props to the component in App.jsx
<Contact
   img="./images/mr-whiskerson.png"
   name="Mr. Whiskerson"
   phone="(212) 555-1234"
   email="mr.whiskaz@catnap.meow"
/>

/* props returns an object
      props {
         img: "./images/mr-whiskerson.png",
         name: "Mr. Whiskerson",
         age: 37,
         phone: "(212) 555-1234",
         email: "mr.whiskaz@catnap.meow"
      }                                  */

// using the props in the component
function Contact(img, name, phone, email) {
   return (
      <div className="contact-card">
         {/* this is how we destructure the props */}
         <img src={img} />
         <h3>{name}</h3>
         <div className="info-group">
            <img src="./images/phone-icon.png" />
            <p>{phone}</p>
         </div>
         <div className="info-group">
            <img src="./images/mail-icon.png" />
            <p>{email}</p>
         </div>
      </div>
   )
}

//------------------------------------------------------------------------------

// destructuring an object by ES6 syntex

// we have an object
const person = {
   avatar: '../assets/avatar.png',
   name: 'Mr. Boss',
   phone: '+11111111111',
   mail: 'mail@gmail.com'
}

// this is ES6 object distributing syntex
const { avatar, name } = person
/* after destucturing we have avatar & name varibles like this:
      let avatar = '../assets/avatar.png'
      let name = 'Mr. Boss'                */

console.log(name)
// получим Mr. Boss

//------------------------------------------------------------------------------

// Desturucturing the props in the component by ES6 syntex

// insted of props we can write directly keys of object props 
function Contact({ img, name, phone, email }) {
   return (
      <div className="contact-card">
         {/* then we will need to change some of code inside the component */}
         {/* we deleted props., because after destucturing keys became as variables  */}
         <img src={img} />
         <h3>{name}</h3>
         <div className="info-group">
            <img src="./images/phone-icon.png" />
            <p>{phone}</p>
         </div>
         <div className="info-group">
            <img src="./images/mail-icon.png" />
            <p>{email}</p>
         </div>
      </div>
   )
}

// This method of destructuring the object is more uncomfortable
//==============================================================================

//==============================================================================
/* So we need to hide the empty element, 
   there are two ways to hide elements when props is empty   */

// 1. ES6 syntex  - &&   

function Dialog(props) {
   return (
      <div>
         {/*   &&  - it means, 
                 if the first part returns true, it will process the second part
                 if the first part returns false it will stop */}
         {props.person1 && <p>Person1: {props.person1}</p>}
         <p>Person2: {props.person2}</p>
         <hr />
      </div>
   )
}

/*
   so we will see on the page
 
      Person2: Hello!
 
   because empty props will return false, and the element will not be shown
*/

//------------------------------------------------------------------------------

// 2. css+js syntex

export default function Dialog(props) {
   return (
      <div>
         {/*   It means:   if the props.person1 returns 'true' then display: block
                           if the props.person1 returns 'false', then display: none  */}
         <p style={{ display: props.person1 ? "block" : "none" }}>Person1: {props.person1}</p>
         <p>Person2: {props.person2}</p>
         <hr />
      </div >
   )
}
//==============================================================================