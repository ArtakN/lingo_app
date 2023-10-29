
// Object
const you: object = {
   userName: 'Bobby',
   isReturning: true,
}

// or
const you1: {} = {
   userName: 'Bobby',
   isReturning: true,
}

// if we try to console log a property of the object we wil get error
console.log(you.userName)

// to solve this problem, we need to sigh properties types, too.
const you2: {
   userName: string;
   isReturning: boolean;
} = {
   userName: 'Bobby',
   isReturning: true,
}

// and now console log weill work fine
console.log(you2.userName)
// -> 'Bobby