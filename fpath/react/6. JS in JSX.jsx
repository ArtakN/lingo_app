/*
   -JSX attributes inside quotes are passed as strings.
   -Curly braces let us bring JavaScript logic and variables into our markup.
   -They work inside the JSX tag content or immediately after = in attributes.
   -{{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
*/

// ============================================================================+
// When we want to pass a string attribute to JSX, we put it in single or double quotes:
export default function Avatar() {
   return (
      <img
         className="avatar"
         src="https://i.imgur.com/7vQD0fPs.jpg"
         alt="Gregorio Y. Zara"
      />
   );
}

/* But if we want to dynamically specify a attribute value. 
   We could replace a string attribute value to a JavaScript variable 
      
      "avatar" with { avatar }   */

export default function Avatar() {
   return (
      <img
         className={avatar}
         src="https://i.imgur.com/7vQD0fPs.jpg"
         alt="Gregorio Y. Zara"
      />
   );
}

// We can use JavaScript inside JSX with curly braces { } 
export default function TodoList() {
   const name = 'Gregorio Y. Zara';
   return (
      <>
         <h1>{name}'s To Do List</h1>
         <p>To Do List for {formatDate(today)}</p>
      </>
   );
}
// Any JavaScript expression will work between curly braces, including function calls
// =============================================================================

// =============================================================================
/* We can only use curly braces in two ways inside JSX:

   1. As text directly inside a JSX tag:

      <h1>{name}'s To Do List</h1>     works, 
         but
      < { tag } > Gregorio Y.Zara's To Do List</{tag}>      will not.

   2. As attributes immediately following the = sign:

      src = { avatar } will read the avatar variable, but
      src = "{avatar}" will pass the string "{avatar}".  */
// =============================================================================

// =============================================================================
// Using “double curlies”: CSS and other objects in JSX

/* In addition to strings, numbers, and other JavaScript expressions, we can 
   even pass objects in JSX. Objects are also denoted with curly braces, like 
   { name: "Hedy Lamarr", inventions: 5 }. Therefore, to pass a JS object in JSX, we must wrap the object in another pair of curly braces:

      person={{ name: "Hedy Lamarr", inventions: 5 }}.   */

// We can move several expressions into one object, and reference them in JSX inside curly braces:

// In this example, the person JavaScript object contains a name string and a theme object:
const baseUrl = 'https://i.imgur.com/';

const person = {
   name: 'Gregorio Y. Zara',
   theme: {
      backgroundColor: 'black',
      color: 'pink'
   },
   imageId: '7vQD0fP',
   imageSize: 's'
};

export default function TodoList() {
   return (
      // *****The component can use these values from person like so:
      <div style={person.theme}>
         <h1>{person.name}'s Todos</h1>
         <img
            className="avatar"
            // the full image URL is split into four parts: we wrote an expression inside JSX curly braces 
            src={baseUrl + person.imageId + person.imageSize + '.jpg'}
            alt="Gregorio Y. Zara"
         />
         <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
         </ul>
      </div>
   );
}
// =============================================================================