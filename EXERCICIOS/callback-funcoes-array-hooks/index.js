// EXERCÍCIO 1

// function verificaImpar(num, imprimir) {
//   if (num % 2 !== 0) {
//     imprimir()
//   }
// }

// function imprimeMensagem() {
//   console.log("Sim, é ímpar!")
// }

// verificaImpar(7, imprimeMensagem)
// verificaImpar(8, imprimeMensagem)

// EXERCÍCIO 2
// const arrayOriginal = [2, 5, 9, 56, 8, 10]

// const arrayStrings = arrayOriginal.map((numero, index, array) => {
//   return `O elemento ${index} vale ${numero}`
// })
// console.log(arrayStrings)

// EXERCÍCIO 3
// const arrayEntrada = [1, 5, 7, 9, 68, 4, 72, 13, 32, 903, 8764, 2, 16]

// const maioresQue10 = arrayEntrada.filter(numero => {
//   return numero > 10
// })
// console.log(maioresQue10)

// const numerosPares = arrayEntrada.filter(item => {
//   return item % 2 === 0
// })

// console.log(numerosPares)

// EXERCÍCIO 4
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

// primeira parte - filtrar produtos da categoria Limpeza
const produtosLimpeza = produtos.filter((produto) => {
  return produto.categoria === 'Limpeza'
})
console.log(produtosLimpeza)


// segunda parte - mapear os produtos da categoria limpeza e gerar um array apenas com os nomes desses produtos
const nomesProdutosLimpeza = produtosLimpeza.map((produto) => {
  return produto.nome
})
console.log(nomesProdutosLimpeza)

