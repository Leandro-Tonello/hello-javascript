/*datatypes
hay diferentes tipos de datos, los primitivos y los que no lo son
los datos primitivos: son datos basicos, inmutables y representan un solo valor.
NO SON OBJETOS y NO TIENEN FUNCIONES O METODOS 
Existen 7 tipos de datos: */

// String (Cadena de texto)
let myName = "Leandro Tonello"
let alias = "Lei"
let email = "lntonello@gmail.com"

// Number (Números)
let age = 28 // Entero
let height = 1.88 // Decimal

// Boolean (Booleanos)
let isStudent = true
let haveJob = true
let isTeacher = false

// Undefined
let undefinedValue 
console.log (undefinedValue)

// Null
let nullValue = null

// Symbol (intentan representar valores unicos, como identificadores de propiedades, evitan coliciones entre otras propiedades)
let mySymbol = Symbol("mysymbol")

// BigInt (gran entero)
let myBigInt = BigInt(2232323232324242525252524232324232322232323232)
let myBigInt2 = 223232323232424252525252423232423232223232323224242n

//Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
