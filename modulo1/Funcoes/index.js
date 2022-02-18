//Exercicios interpretação de código

//1

//a) 
// 10
// 50

//b) Não apareceria nada no console, pois para aparecer no console precisa colocar o console.log

//2
/* a) a função transforma todas as letras do texto em minusculos 
e informa se dentro dele tem a palavra cenoura, retornando true or false
é algo útil para não ter que fazer isso repetidas vezes no código e encontrar algo no texto.
*/


//b) eu gosto de cenoura, true
// cenoura é bom para vista, true
// cenouras crescem na terra, true

// Exercicios escrita de código

//1

//a)
function sobreMim() {
   const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const cidadeMora = prompt("Qual a cidade onde você mora?")
   const estudante = prompt ("Informe se você é estudante")
  console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidadeMora} e sou ${estudante}`)
}


sobreMim()

//b)
function imprimirDadosPessoais(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
 }

imprimirDadosPessoais ("Izabella", "22", "Osório", "Estudante")


//2

//a) 

function soma (num1, num2) {
    console.log (num1 + num2)
}
soma (10, 50)


//b)
function maiorIGual (num1, num2) {
    console.log (num1>=num2)
}

maiorIGual (30, 90)

//c)
function par (num1) {
    let resto = (num1 % 2)
    console.log (resto === 0)
}

par (50)

//d) 
function stringTamanho (String) {
    const tamanho = (String.lenght)
    const maiuscula = (String.toUpperCase)
    console.log (tamanho)
    console.log (maiuscula)
}

stringTamanho ("Izabella")


//3
function somar (num1, num2) {
    console.log (num1 + num2)
}

function subtrair (num1, num2) {
    console.log (num1 - num2)
}

function dividir (num1, num2) {
    console.log (num1 / num2)
}

function multiplicar (num1, num2) {
    console.log (num1 * num2)
}

const num1 = prompt ("Insira um numero")
const num2 = prompt ("Insira outro numero")

somar (+num1, +num2)
subtrair (+num1, +num2)
dividir (+num1, +num2)
multiplicar (+num1, +num2)


