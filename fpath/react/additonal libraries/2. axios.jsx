/* We will use exis insted of fetch to send requests and get resopnes,
   because axios is more simple to use and it has more functionality.

To use the axios library, we need to install it at first

      npm install axios

   then we need to import it to the component   */
import axios from 'axios'

// we will change axios insted of fetch

// fetch
useEffect(() => {
   setIsLoading(true)

   fetch('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
      .then((res) => res.json())
      .then((data) => {
         setCards(data)
         setIsLoading(false)
      })

}, [selectedCategory])

// axios
useEffect(() => {
   setIsLoading(true)

   axios.get('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
      // we get a js object here and don't need to parse json
      .then((res) => {
         // we will get data from the js object
         setCards(res.data)
         setIsLoading(false)
      })

}, [selectedCategory])