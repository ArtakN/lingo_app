/* Function type

   TypeScript has many ways to describe how functions can be called. 
   Let's learn about how to write types that describe functions.   */
   function add( firstValue: number, secondValue: number ) : number {
      return firstValue + secondValue
    }
   //  it means that the first and the second arguments type need to be number and the function need to return type number
// =============================================================================

// =============================================================================
   // in this function both of arguments are requried, if we try to call this function with one argument, we will get an error
add(5)   //error

// if we want to allow the function procced with one argument, we need to mention that the second argument is optional adding ? after the argument. this means that the second argument can be or number or undefined
function addNum( firstValue: number, secondValue?: number ) : number {
   return firstValue + secondValue
 }

 const newNum: number = function addNum(5)
// =============================================================================

