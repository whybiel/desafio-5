 // Crie um array que receba 5 itens e exiba no console.

 let familia = ["Gabriel", "Andreia", "Miguel", "Mariana", "Jaci"]

 console.log(familia)

// Utilize um método para adicionar um nome ao inicio do array.

familia.unshift("Renato")

console.log(familia)

// Utilize um método para remover o último nome do array.

familia.pop()

console.log(familia)

// Utilize um método para adicionar dois nomes ao fim do array.

familia.splice(5,0,"Dalton","Jaci")

console.log(familia)

// Utilize um método para remover o primeiro nome do array.

familia.splice(0,1)

console.log(familia)

// Utilize um método para organizar em ordem crescente o seguinte array:

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})

console.log(numbers)