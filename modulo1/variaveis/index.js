// Resposta exercicio 1:
// 10
// 10, 5

// Resposrta exercicio 2:
// a = 10
// b = 10
// c = 10

// Resposta exercicio 3:
// p = quantidadeHorasTrabalhadasPorDia
// t = valorRecebidoPorDia

// Exercicios escrita de código 
// 01

let nome

let idade

console.log(typeof nome, idade)

/* tentei usar const porém sempre dava um erro, com let consegui não declarar a função e no
console retornou que ambas as variaveis sao undefined, acredito que elas são assim pois não 
declaramos nenhum valor para elas, ou seja elas não foram definidas */

nome = prompt ("Qual seu nome?")
idade = prompt ("Qual sua idade?")

console.log(typeof nome, idade)

// Notei que as variaveis ficaram com string e a idade ficou apenas 22, não deveria aparecer "numbers"

console.log ("Ola", nome, ",você tem", idade, "anos") 



// 02
const pergunta1 = "Você esta feliz hoje?"
const pergunta2 = "Você dormiu bem?"
const pergunta3 = "Você tem aula hoje?"

const feliz = "Sim"
const sono = "Não"
const aula = "Não"

console.log(pergunta1, feliz)
console.log(pergunta2, sono)
console.log(pergunta3, aula)

//3

let a = 10
let b = 25
let c = 0 
c = a 
a = b 
b = c


console.log ("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// DESAFIO

let numero1 = +prompt ("Escolha um numero inteiro")
let numero2 = prompt ("Escolha outro numero inteiro")

console.log(+numero1 + +numero2)

console.log(+numero1 * +numero2)


