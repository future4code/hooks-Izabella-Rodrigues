/* 
   AULA DE FUNÇÕES
      Turma hooks
*/

// SINTAXE

function nomeDaFuncao() {
   // bloco de código a ser executado
   console.log('Funçao ativa e operante')
}
nomeDaFuncao() // chama a funçao para ser executada


/* EXERCICIO 01 */
function imprimirOla() {
   // bloco da minha funçao
   console.log("Ola Gente")  
}
imprimirOla()

// PARAMETROS E ARGUMENTOS

/* EXERCICIO 02 */
function imprimirNome(nome) { //parametro
   console.log(`Ola ${nome}`)
}

imprimirNome("Tayanne") // argumento


function imprimirDadosPessoais(nome, idade, profissao) {
   console.log(`Ola ${nome}, sua idade ${idade}, e sua profissao ${profissao}`)
}
imprimirDadosPessoais(28, "instrutora", "tayanne")
// A ORDEM DOS ARGUMENTOS É O REALMENTE IMPORTA, O JS NÃO LÊ AS PALAVRAS


// ESCOPO

const varGlobal = 2;

function escopoExemplo() {
   const varLocal = 3; // VARIAVEIS DENTRO DA FUNÇAO, SÓ EXISTEM DENTRO DA FUNÇAO
   console.log("Variavel Global Bloco:", varGlobal);
   console.log("Variavel Local Bloco:", varLocal);
   // logica 
   
}

escopoExemplo()
console.log("Variavel Global Fora:", varGlobal);
console.log("Variavel Local Fora:", varLocal);

/* EXERCICIO 03 */
function soma(num1, num2) {
   return num1 + num2
}
const somando = soma(5, 10)
// console.log(somando)



/* EXERCICIO 04 */
const array = [10, 2, 3, 4, 5, 6, 20]
function divideArray(array) {
   const novoArray = []

   const primeiro = array[0]
   const ultimo = array[ array.length -1]

   novoArray.push(primeiro /2)
   novoArray.push(ultimo /2)

   return novoArray // retorna a resultado para quem invoca a funçao
}
// console.log( divideArray(array) )




/* 
    TIPOS DE FUNÇÃO
*/

/* EXERCICIO 05 */

// funções nomeadas #mais utilizadas

function imprimirNome(nome) { //parametro
   console.log(`Ola ${nome}`)
}

// imprimirNome("Tayanne") // argumento


// funções anonimas = nao-nomeada #depreciada
const imprimirNomeAnonimo = function (nome) {
   console.log(`Ola ${nome}`)

}

// arrow function #melhor opção
const imprimirNomeArrow = (nome) => console.log(`Ola ${nome}`) // quando a funçao exercutar SOMENTE UMA LINHA DE CÓDIGO pode-se omitir o bloco {} e o return será implicito

const imprimirNomeArrowReturn = (nome) => `Ola ${nome}` // quando a funçao exercutar SOMENTE UMA LINHA DE CÓDIGO pode-se omitir o bloco {} e o return será implicito


imprimirNomeAnonimo("Mizael")
imprimirNomeArrow("Livia")

console.log( imprimirNomeArrowReturn("Tayanne") )


