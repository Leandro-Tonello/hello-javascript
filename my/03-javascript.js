// Strings
let myName = "Lean"
let myAge = "28"

//Concatenacón
let greeting = "Hola, " + myName + "!"
console.log(greeting)

//longitud
console.log(greeting.length)

//acceso a caracteres
console.log(greeting[0])
console.log(greeting[10])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Lean")) //indice de donde encontro la palabra Lean
console.log(greeting.includes("Hola")) // incluye esta palabra?
console.log(greeting.includes("Lean"))
console.log(greeting.includes("Sabado"))  
console.log(greeting.slice(0,10))
console.log(greeting.replace("Lean", "Leandro Tonello")) 

// Template literals (plantillas literales)
let message = `Hola, es es mi 
curso de javascript`
console.log(message)
let email = "mail@gmail.com"
console.log(`Hola ${myName}! Tu email es ${email}`)