// Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e 
//imprima a mensagem:  "A cor favorita de FULANO é COR"

const nome = prompt("Qual o seu nome")
const cor = prompt("Qual a sua cor favorita")

// Faça o exercício duas vezes, utilizando template strings e concatenação

const fraseConcat = "A cor favorita de " + nome + " é " + cor 
console.log("concatenação:", fraseConcat )

const fraseTemplateString = `A cor favorita de ${nome} é ${cor}`
console.log("Template String:", fraseTemplateString )