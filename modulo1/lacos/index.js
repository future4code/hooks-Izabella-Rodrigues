//Exercicios de Interpretação
// 1-
// não entendi o resultado que apareceu, não fez sentido pra mim.

// 2-
// a) 19, 21, 23, 25, 27, 30
// b) sim, ficaria assim:

/*let indiceDaLista = 0
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let indiceDaLista of lista) {
		console.log(indiceDaLista)
    indiceDaLista++
	}
*/

// 3- O resultado impresso foi esse:
/* *
   **
   ***
   ****  
*/ 
// o motivo disso ter aparecido eu não entendi, fiquei bem confusa com esse exercicio.


// Exercicios de escrita de código
// 1- criei um loop infinito e não atinei a fazer dar certo.

// let bixinhosEstimacaoUsuario = Number (prompt ("Quantos bixinhos de estimação você tem?"))

//     if (bixinhosEstimacaoUsuario === 0) {
//         console.log ("Que pena! Você pode adotar um pet!")
// }       
//     if (bixinhosEstimacaoUsuario > 0){
//         let arrayBixinhos = []
//         for (let i = 0; i < bixinhosEstimacaoUsuario; i++){
//             arrayBixinhos.push(prompt("Qual o nome do seu bixinho?"))
//             console.log (arrayBixinhos)
//         }
//     }

// 2-

// let arrayOriginal = [1, 5, 6, 9, 8]
// let indiceArrayOriginal = 0

// //a
// for (indiceArrayOriginal of arrayOriginal){
//     console.log(indiceArrayOriginal)
//     indiceArrayOriginal++
// }
//  //b

// for (divisaoArray of arrayOriginal){
//     console.log(divisaoArray/10)
//     indiceArrayOriginal++
// }

// //c
// let novoArrayPar = []

// for (arrayPares of arrayOriginal) {
//     if (arrayPares % 2 === 0)
//     console.log (arrayPares)
// }

// //d
// function imprimirArray (arrayOriginal) {
//     let arrayString = []
//     let i = 0
//         for (let valor of arrayOriginal){
//         arrayString.push(`O elemento do índex ${i} é: ${valor}`)
//         i++
//         }
//         console.log (arrayString)
// }
// imprimirArray (arrayOriginal)

// //e
// function maiorEMenorNumero (arrayOriginal){
//     let maiorNumero = 0
//     let menorNumero = Infinity //não entendi pq se usa isso.

//     for(let i = 0; i < arrayOriginal.length; i++){

//             if(arrayOriginal[i] < menorNumero){
//               menorNumero = arrayOriginal[i]
//             }
//             else if(arrayOriginal[i] > maiorNumero){
//               maiorNumero = arrayOriginal[i]
//             }
//           }
//           console.log("O maior numero é:", maiorNumero)
//           console.log("O menor numero é:", menorNumero)
// }

// maiorEMenorNumero (arrayOriginal)

//Desafio 01-
 
console.log ("Vamos Jogar!")
const numeroEscolhidoUsuario = Number(prompt("Escolha um numero"))


