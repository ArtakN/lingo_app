// =============================================================================
// JavaScript Types....

// Primitives:

// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"

// Structural Types:

// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Structural Root Primitive:

// null : typeof instance === "object"
// =============================================================================

// =============================================================================
// TypeScript Types....

// Boolean  true, false
let isOpen : boolean
// Number   10, 1.5
let age : number
// String   'hi', "hello", `Moyn`
let name: string

// Structural Types:

// Object
const you: object = {
   userName: 'Bobby',
   isReturning: true,
}

// Array - special object type
let stayedAt: string[];

stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']

// Tuple
let currentLocation: [string, string, number] = ['London', '11:35', 17]

// Enum

// Any

// Union

// Literal

// Function

// Unknown
// Never
// Custom
// =============================================================================

// =============================================================================
// Один из 2х типов 

let fullName: string | null = "Arman"     // или стока или же null
// =============================================================================