/* Union

   Now that we know how to write a few types, it's time 
   to start combining them in interesting ways.    */

   // firstValue : (number | string) this meean that firstValue type may string or number 
   function add(firstValue : (number | string), secondValue: (number | string)) {
      let result
      if (typeof firstValue === 'number' && typeof secondValue === 'number') {
          result = firstValue + secondValue
      }
      if (typeof firstValue === 'string' && typeof secondValue === 'string') {
          result = firstValue + ' ' + secondValue
      }
      if (typeof firstValue === 'number' && typeof secondValue === 'string') {
          console.log('cannot perform this addition')
      }
      if (typeof firstValue === 'string' && typeof secondValue === 'number') {
          console.log('cannot perform this addition')
      }
  }