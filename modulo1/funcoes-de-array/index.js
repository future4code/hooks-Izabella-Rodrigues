// Exercicios de interpretação de Código

// 1 - 
// [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
// index: 3
// array[0]

// 2-
// ["Amanda Rangel
// Laís Petra
// Letícia Chijo"]

// 3-
// ["Mandi"
// "Laura"]

// Exercicios de escrita de código

// 1-

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)
 const nomePets = pets.map((item) => {
    return item.nome
    
 })
 console.log (nomePets)

 // b)
 const petsPoodle = pets.filter ((item) => {
    return item.raca === "Poodle"
 })
 console.log(petsPoodle)

 // c)
const cupomPoodle = petsPoodle.map ((item) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(cupomPoodle)

// 2-
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
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)
const nomeProdutos = produtos.map ((item) => {
   return item.nome
})
console.log (nomeProdutos)

// b)
const nomeEPreçoProdutos = produtos.map ((item) => {
   const valorSemDesc = Number(item.preco)
   const valorComDesc = (valorSemDesc) /100* 95
   return valorComDesc
})
console.log (nomeEPreçoProdutos)

// c)
const bebidas = produtos.filter ((item) => {
   return item.categoria === 'Bebidas'
})
console.log(bebidas)

// d)
const ype = produtos.filter ((item) => {
   return (item.nome).includes("Ypê") 
})
console.log (ype)

// e)
const precoYpe = ype.map ((item) => {
   const valorYpe = Number(item.preco)
   return `Compre ${item.nome} por ${valorYpe}`
})
console.log(precoYpe)


//Desario
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

// a)
const nomePokemon = pokemons.map ((item) => {
   return item.nome.toLowerCase()
})
nomePokemon.sort()

console.log(nomePokemon)

// b)
const tipoPokemon = pokemons.map ((item) => {
   return item.tipo
}
)

   