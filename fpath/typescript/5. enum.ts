/* Enum 

   As in languages like C#, an enum is a way of giving 
   more friendly names to sets of numeric values.  */
const ADMIN = 'admin'
const READ_ONLY = 'read-only'

enum Permissions {
    ADMIN,
    READ_ONLY
}

const you = {
   firstName: 'Bobby',
   lastName: 'Brown',
   permissions: Permissions.ADMIN,
   isReturning: true,
   age: 35,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}