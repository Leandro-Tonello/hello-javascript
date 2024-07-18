// Operators (Operadores)

// Operadores Aritmeticos
let a = 5
let b = 10

console.log(a + b) //Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicar
console.log(a / b) // Dividir

console.log (a % b) // Modulo
console.log (a ** b) // Exponencial

a++ // incremento
console.log (a) 

b-- // decremento
console.log(b)

// Operadores de comparacíon 

console.log(a > b)
console.log(a < b)
console.log (a >= b)
console.log (a <= b)
console.log (a == b)

console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor

console.log(a === a) // igualdad por tipo y valor
console.log(a === 6) // igualdad por tipo y valor
console.log(a === "6") // igualdad por tipo y valor no son lo mismo

console.log (a != 6) // ! -> nos da el negativo de la comparacion que realizamos
console.log (a !== 6) // 

console.log (0 == false)
console.log (1 == false)
console.log (2 == false)

console.log (0 == "")
console.log (0 == "  ")
console.log (0 == '')
console.log (0 == "hola")
console.log (0 === "")

// Truthy Values (Valores verdaderos) son asi porque son asi

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean True

// Falsy values (valores falso) 

// 0
// 0n
// undefined
// NaN
// El boolean false
// cadenas de texto vacia

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 < 20 && 30 < 40)

// or ( || ) 
console.log(5 > 10 || 10 < 15 )
console.log(5 > 10 || 10 > 15 )

//not (!)
console.log(!(5 > 10 && 15 > 20)) 
console.log(!(5 > 10 || 15 > 20)) 

// Operadores ternarios (es otra forma de escribir condicionales)

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")