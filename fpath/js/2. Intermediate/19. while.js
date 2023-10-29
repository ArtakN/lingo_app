/*`The `while` loop in JavaScript is a control flow statement that allows code to be executed repeatedly based on a given boolean condition³⁵. The loop can be thought of as a repeating `if` statement³. Here's the syntax:  */


while (condition) {
   // code block to be executed
}


/* In this structure, the`condition` is evaluated before each pass through the loop². If this condition evaluates to`true`, the code block is executed¹⁴. When the condition evaluates to`false`, execution continues with the statement after the `while` loop². */

let i = 0;
while (i < 5) {
   console.log(i);
   i++;
}

/* In this example, the loop will log the numbers 0 through 4 to the console.The variable `i` is incremented with each iteration, and when `i` is no longer less than 5, the loop terminates.

   It's important to ensure that the condition in a `while` loop becomes false at some point. Otherwise, the loop will continue indefinitely, which can cause your program to crash¹.

There's also a variant of the `while` loop known as the `do...while` loop¹. This loop will execute the code block once before checking if the condition is true, then it will repeat the loop as long as the condition is true¹.

Remember, while loops are powerful tools, but they must be used carefully to avoid infinite loops and other unexpected behaviors.   */
// =============================================================================

// =============================================================================
// while for array

while (wordsArray.length < 5) {

   let newWord = randomWord()

   if (!wordsArray.includes(newWord)) {
      wordsArray.push(newWord)
   }
}

/* while loop will continue until wordsArray has 5 elements. This avoids the need to manually decrement the loop counter when a duplicate word is found.   */
// =============================================================================