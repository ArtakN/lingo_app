/* The reduce() method in JavaScript is used with arrays. It reduces the array 
   to a single value after iterating over each item1. 
   
   This method takes a callback function as a parameter1. The callback function accepts four arguments2:

      accumulator: The initialValue, or the previously returned value of the function.
      currentValue: The value of the current element.
      currentIndex: The index of the current element (Optional).
      arr: The array the current element belongs to (Optional)    */
arr.reduce(callback(accumulator, currentValue), initialValue)


// .reduce() method - give me just one thing
const rainJanuaryByWeek = [10, 20, 0, 122]

/* function of reduce() method gets 2 parameters, 
      -total - initial value is 10, then 10+20 =30, then 30+0=30, then 30+122=152
      -currentElement - inital value is 20, then 0, then 122  */
const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (total, currentElement) {

      console.log('total: ' + total, 'currentElement: ' + currentElement)

      return total + currentElement

})

console.log(totalRainfallJanuary)
// -> total: 10, "currentElement: 20"
// -> total: 30, "currentElement: 0"
// -> total: 30, "currentElement: 122"
// -> 152