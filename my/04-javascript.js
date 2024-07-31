// MAP: sirven para asociar claves con valores

// Declaración

let myMap = new Map([
    ["name", "Leandro"],
    ["email", "leandro@gmail.com"],
    ["age", 28]
]);   

console.log(myMap)


//loops

// for: ejecutarse conforme lo lanzamos y se sigue ejecutando hasta que da false

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while: se ejecuta mientras la condicion sea true

let i = 1;
while (i < 5) {
    console.log(`Hola ${i}`);
    i++;
}





