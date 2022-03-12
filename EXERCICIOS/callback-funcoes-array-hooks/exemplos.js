// EXEMPLOS - PADARIA

// const vender = () => {
//   const nome = prompt('Qual é o seu nome?')
//   const venda = prompt('Quantos gramas você quer?')

//   console.log(`Muito obrigada pela preferência, ${nome}. Você comprou ${venda} gramas de presunto`)
// }


// EXEMPLOS - REVISÃO FUNÇÕES
// function calculaAreaRetangulo(lado1, lado2) {
//   const resultado = lado1 * lado2
//   return resultado
// }

// const alturaRetangulo = 4
// const larguraRetangulo = 12

// const areaRetangulo = calculaAreaRetangulo(alturaRetangulo, larguraRetangulo)
// console.log(areaRetangulo)

// const calculaAreaTriangulo = (lado1, lado2) => {
//   const resultado = (lado1 * lado2) / 2
//   console.log(resultado)
//   return `A área do triângulo é ${resultado}`
// }

// const areaTriangulo = calculaAreaTriangulo(5, 5)
// console.log(areaTriangulo)


// EXEMPLOS - CALLBACK

// nesse exemplo, a função verificaParEDivide recebe um número e uma função como parâmetros
// function verificaParEDivide(numero, imprimir) {
//   if (numero % 2 === 0) {
//     const resultado = numero / 2
//     imprimir(resultado)
//   }
// }

// const imprimeMensagem = (valor) => {
//   console.log(`O resultado da divisão é ${valor}`)
// }

// const imprimeMensagemIngles = (valor) => {
//   console.log(`The result is ${valor}`)
// }

// podemos invocar a função passando como callback a função imprimeMensagem ou a função imprimeMensagemIngles
// verificaParEDivide(50, imprimeMensagem)
// verificaParEDivide(200, imprimeMensagemIngles)
// verificaParEDivide(13, imprimeMensagem)
// verificaParEDivide(300, imprimeMensagemIngles)


// essa função recebe três parâmetros: o número e duas funções de callback
// a primeira função de callback é invocada no if
// a segunda função de callback é invocada no else
// function verificaParEDivideEImprimeEmInglesImpar(numero, imprimirPT, imprimirEN) {
//   if (numero % 2 === 0) {
//     const resultado = numero / 2
//     imprimirPT(resultado)
//   } else {
//     imprimirEN()
//   }
// }

// const imprimeMensagemInglesImpar = () => {
//   console.log("Your number can't be divided by 2")
// }

// verificaParEDivide(10, imprimeMensagem, imprimeMensagemInglesImpar)
// verificaParEDivide(11, imprimeMensagem, imprimeMensagemInglesImpar)



// EXEMPLO - MAP

// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]

// const pegaNome = (item) => {
//   return item.nome
// }

// const nomesPokemons = pokemons.map(pegaNome)
// // console.log(nomesPokemons)

// const pegaIndice = (item, indice) => {
//   return indice
// }

// const indicesPokemons = pokemons.map(pegaIndice)
// // console.log(indicesPokemons)

// const tiposPokemons = pokemons.map((pokemon, index) => {
//   return `O pokémon da posição ${index} é do tipo ${pokemon.tipo}`
// })
// console.log(tiposPokemons)

// EXEMPLO - FILTER

// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]

// const pokemonsGrama = pokemons.filter((poke) => {
//   return poke.tipo === 'grama'
// })
// console.log(pokemonsGrama)

// function filtraAgua(poke) {
//   return poke.tipo === 'água'
// }

// const pokemonsAgua = pokemons.filter(filtraAgua)
// console.log(pokemonsAgua)