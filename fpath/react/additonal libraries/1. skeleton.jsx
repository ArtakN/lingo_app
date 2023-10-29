/* Before data is not get from the server we need to show something on our page 
   insted of empty blank. we can do any tipe of loading, in some sites it is 
   only a text like. 
      
      loading...  
      
   or we can use sceleton  */

/* we can create skeleton for react app on skeletonreact.com website
   on this website we need to assemble skeleton like in figma according 
   to design components sizes

   the first 2 fields are Canvas sizes, these are our item size,
   for example we create a card and the card block sizes are 250*450 
   so we will write 250 and 450 in Canvas sezes fields  
   
   after we created skeleton in the skeletonreact.com page, we create a
   folder in the components folder with name of PizzaBlock and put
   our PizzaBlock component inside this folder, it will be like
   
      src/components/PizzaBlock/PizzaBlock.jsx     
      
   but now we will get an error, and the component want be renderes 
   because in App.jsx we imported PizzaBlock component like this

      import PizzaBlock from "./components/PizzaBlock" 
   
   and now to fix the error we need to import like this, 
   but this is not a good experience

      import PizzaBlock from "./components/PizzaBlock/PizzaBlock"
   
   or we can rename the PizzaBlock component to index.jsx
   it will work because in the case when we import PizzaBlock component like this

      import PizzaBlock from "./components/PizzaBlock" 
   
   the webpack will look for index.jsx file in this folder 
   
   then in the PizzaBlock folder we create a new skeleton.jsx file
   and copy all the code from the skeletonreact.com website to the
   Skeleton.jsx file, and change the component name to Skeleton or
   may be PizzaSkeleton (it's default name is MyLoader). 
   
   Before to use it we need to add react-content-loader library.
   we need to add it to our project. For this in the terminal we write
   
      npm install react-content-loader 
      
   after that we import Skeleton component to App.jsx component

      import PizzaBlock from "./components/PizzaBlockSkelton"
       
   there may be we need to add the same css classes to Skeleton component
   like PizzaBlock component or may be we need to create new styled for 
   skeleton component, because for adaptive design Skeleton cards behavor 
   may be will be other than the real cards behavor, they need to 
   be the same.

   And now we need to create something which will tell us that pizzas are 
   loaded or not yet. For this we will create a state and if it is true
   it will mean that the page is loading and need to show the Pizzas skeleton,
   as soon as the Pizzas are loaded, isLoading state will become false and
   will be shown Pizzas page. */
const [isLoading, setIsLoading] = useState(true)

// and in App.jsx we write tha conditional rendering
return (
   <>
      <div style={{ display: "flex", gap: "40px" }}>
         {/* if the page is loading show PizzaSkeleton, if it is rendered show real Pizzas */}
         {pizzas.map(pizza => isLoading ? <PizzaSkeleton key={pizza.id} /> : <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
   </>
)

/* if we have 1000 pizzas, it means that there will be 1000 pizza skeletons
   but we don't need to render 1000 skeletons, we need then to cover only 
   the first page, so we need to rander for example 8 pizza skeletons.
   I need to create an array with 8 elements to show only 8 pizza skeletons.  */
return (
   <>
      <div style={{ display: "flex", gap: "40px" }}>
         {/* if isLoading true ? crete an array with 8 empty elements, with map method create
            an array with pizza skeletons and render it : else create an array with real pizzas
            and render it */}
         {isLoading ? new Array(8).map((_, index) => <PizzaSkeleton key={index} />)
            : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
   </>
)

// and now we need to understand when loading is over to show real pizzas
useEffect(() => {
   fetch("https://646fcd6809ff19b12087c5c4.mockapi.io/items")
      .then(response => response.json())
      .then(data => {
         setItems(data)
         // after we get data we will set state as false 
         setIsLoading(false)
      })
}, [])


