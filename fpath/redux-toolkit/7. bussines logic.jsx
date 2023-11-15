/* businnes logic in frontend means where we keep our server requests 
   and response

   it includes:
      - server requests
      - getting and seaving responses */

// this is a bussines logic
try {
   const res = await axios.get('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
   setCards(res.data)
   setIsLoading(false)
} catch (error) {
   setIsLoading(false)
   console.log('error', error)
}

/* Where do we need to write bussines logic

   -sometimes we will write it in UI (in components). We will create fetch 
   requests with  useEffect() hook

   -sometimes we will write it seperatly:
      - if we use Vanila JS or React without RTK, we will write it in a 
         seperate js file
      - if we use React with RTK, we will write it in the redux toolkit, using 
         asyncronus actions (createAsuncThunk)
      
   Why do we need to write bussines logic seperatly.
 
   Because if we will have to create a new page and in the new page create the same request we will have to write the reques/response logic again. But if we write it seperatly we can do it exportable and reuse it for the new pages.  */
