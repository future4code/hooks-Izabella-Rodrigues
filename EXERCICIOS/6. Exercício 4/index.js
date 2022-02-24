// Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
const numeros = [1,2,3,4,5,6]

// Determine o tamanho do array

console.log("length:", numeros.length )

// Adicione o número 7

numeros.push(7)
console.log("push", numeros)
// Remova os números 4 e 5

const resto = numeros.splice(3, 2)
console.log("splice", numeros)
console.log("valores retirados pelo splice", resto)

// Determine o novo tamanho do array
const novoTamanho = numeros.length
console.log("nova length:", novoTamanho )

// Extra: 

const numeroPopado = numeros.pop()
console.log("pop", numeros)
console.log("saiu:", numeroPopado)

// consultando o último índice e valor
console.log("ultimo índice", numeros.length-1 )
console.log("ultimo valor", numeros[numeros.length-1] )
