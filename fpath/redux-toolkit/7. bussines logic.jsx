/* businnes logic in frontend means where we keep our server requests 
   and response

   sometimes we write bussines login in UI, when we need to call fetch 
   request with useEffect, it is normal practice.
   but sometimes we need to write bussines logic seperatly. 
   In this case if we use JS, we write bussines logic in a seperate js file, crete an seperate method in that file which will use to get data and use this data.
   if we use react/redux we will move bussines logic to redux and use async action with redux toolkit. 

   we create bussines logic seperattly because in this case we can use the data 
   everywhere we want. for example we want to create a new page with pizzas,
   if we have bussines logic seperatly, we can reuse the data in the new page.

   inside async action is not correct to use any window request, console.logs, alerts and etc, because these actions are side effects for redux. all these actions we need to write in a component.

   Асинхронные экшены в RTK (createAsyncThunk)
   
   for this in redux/slice folder we create a new slice - pizzasSlice.js

Bussines logic in applications is logic of server requests / response,

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

      -sometimes we will write it in UI (in components), we create fetch requests with  useEffect() hook

      -sometimes we need to write it seperatly:
         - if we use React without RTK, we will write it in a seperate js file
         - if we use React with RTK, we will write it in redux toolkit, using 
               asyncronus actions
         
   Why do we need to write bussines logic seperatly.
   
      Because if we will have to create a new page and in the new page create the same request we will have to write the reques/response logic again.
      But if we write it seperatly we can do it exportable and reuse it for new pages.  */