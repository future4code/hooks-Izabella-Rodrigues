// Resposta exercicio 01:
// a. false
// b. false
// c. true
// d. booleano

// Resposta exercicio 02:
/*Sim, toda informação vinda do usuario é uma string, 
para a soma funcionar é necessario que o usuario transforme 
a string em um number */

// Resposta exercicio 03:
// const soma = + primeiroNumero + + segundoNumero


// Exercicios escrita de código:

// 01:

const idade = prompt ("Qual sua idade?")
const idadeMelhorAmigo = prompt ("Qual a idade do seu melhor amigo?")

const comparar = idade > idadeMelhorAmigo

console.log("Sua idade é maior que a do seu melhor amigo?", comparar)

console.log(+idade - +idadeMelhorAmigo)

// 02:

const numberPar = prompt ("Escolha um numero par")

console.log (+numberPar % 2)

/* Sim, divisões por 2 de numeros pares nunca darão respostos,
pois eles são multiplos de 2 */

/* Ao inserir um numero impar haverá um resto, pois numero impares
não são multiplos de 2 */

// 03:

const idadeAnos = prompt ("Qual sua idade?")

console.log ( + idadeAnos * 12, "meses")
console.log ( + idadeAnos *365, "dias")
console.log ( + idadeAnos * 8760, "horas")

// 04:

const num1 = prompt ("Escolha um numero")
const num2 = prompt ("Escolha outro numero")

console.log ( "O primeiro numero é maior que o segundo?", + num1 > + num2) 
console.log ("O primeiro numero é igual ao segundo", +num1 === +num2)

let divisivel1 = +num1 / +num2
let divisivel2 = +num2 / +num1

divisivel1 = true
divisivel2 = true

console.log ("O primeiro numero é divisivel pelo segundo?", divisivel1 )
console.log ("O segundo numero é divisivel pelo primeiro?", divisivel2 )

// Desafio 01:
// a:
const Far1 = 77
const Kelvin1 = (Far1 -32) * (5/9) + 273.15
console.log(Kelvin1, "Celcius")

//b:
const celcius = 80
const Fah = (celcius) * (9/5) + 32
console.log(Fah, "Fahrenheit")

// c:

let Celcius1 = 30
let Fah2 = (Celcius1) * (9/5) + 32
let Kelvin2 = (Fah2 -32) * (5/9) + 273.15

console.log(Fah2, "Fahrenheit")
console.log (Kelvin2, "Kelvin")

// d:

let Celcius3 = prompt ("Quantos graus você quer converter")
let Fah3 = (Celcius3) * (9/5) + 32
let Kelvin3 = (Fah3 -32) * (5/9) + 273.15

console.log(Fah3, "Fahrenheit")
console.log (Kelvin3, "Kelvin")

// Desafio 02:

let quilowattHora = 0.05
let consumo = prompt ("Quantos quillowat-hora a sua casa consome")

let valorConsumo = (+consumo*quilowattHora)
let valorDesconto = (valorConsumo * 0.85) 

console.log ( valorConsumo,  valorDesconto)

// Desafio 03:

// a)
let libras = ("20 libras")
let kgLibras = (+20 * 0,454)

console.log (libras, "Equivalem a", kgLibras, "kg")

// b)
let oz = 10.5
let kgOz = (+oz / 35.274)

console.log (oz, "oz equivalem a", kgOz, "kg")

// c)
let milhas = 100
let metrosMilhas = (milhas/0.00062137)

console.log (milhas, "milhas equivalem a",  metrosMilhas, "m")

// d)
let pes = 50
let pesMetros = (pes * 0.3048)

console.log (pes, "pes equivalem a", pesMetros, "m")

// e)
let gal = 103.56
let galLitros = (gal / 0.26417)

console.log (gal, "gal equivalem a", galLitros, "litros")

// f)
let xic = 450
let litXic = (xic *6) /25

console.log (xic, 'xic equivalem a', litXic, 'litros')

// g)

const xicaras = prompt ("Quantas xicaras você quer converter")
const resultadoLitros = (+xicaras *6) /25

console.log (xicaras, 'xic equivalem a', resultadoLitros, 'litros')