// Exercicios interpretação código

// 1-
// a) Matheus Nachtergaele
//    Virginia Cavendish
//     canal: canal: "Globo", horario: "14h"

// 2- 
/* a) nome: "Juca", 
      idade: 3, 
      raca: "SRD"
    
      nome: "Juba", 
      idade: 3, 
      raca: "SRD"
    
      nome: "Jubo", 
	  idade: 3, 
	  raca: "SRD
*/

// b) a sintaxe faz com que automaticamente se copie todos os dados do objeto citado.

// 3- 
/* a) false
      undefined 
*/  
/* b) o valor da chave "backender" dentro do objeto estava definida como false, 
    então ao chamar ela através da function, ela retornou sua definição.
    e a chave altura não existe dentro do objeto e por isso retornou undefined.
*/     


// Exercicios escrita de código
// 1-

const pessoa = {
    nome: "Izabella", 
    apelidos: ["Iza", "Bella", "Bell"]
 }
 function imprimeResultado (pessoa) {
    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},
    ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}.`)
 }


 const novaPessoa = {...pessoa,
    apelidos: ["Bells", "Bebela", "Iz"]
}

imprimeResultado (novaPessoa)
console.log (novaPessoa)


// 2-

const pessoas = {
    nome: "Izabella",
    idade: 22,
    profissão: "Estudante"
}

function pessoa1 (pessoas) {
    console.log ([pessoas.nome, (pessoas.nome.length), pessoas.idade, pessoas.profissão, 
        (pessoas.profissão.length)])
}

 pessoa1 (pessoas)

// 3 -

const carrinho = []

const frutas1 = {
    nome: "Morango",
    disponibilidade: true
}

const frutas2 = {
    nome: "Amora",
    disponibilidade: true
}

const frutas3 = {
    nome: "Pessego",
    disponibilidade: true
}
 function receberFruta (frutas) {
     console.log (carrinho.push(frutas))
 }
 
 receberFruta (frutas1)
 receberFruta (frutas2)
 receberFruta (frutas3)

 console.log (carrinho)



// DESAFIOS

// 1-

//const nome = prompt ("Qual seu nome?")
//const idade = prompt ("Qual sua idade?")
//const profissão2 = prompt ("Qual sua profissão?")

//const objetoUsuario = {
    //nome: nome,
    //idade: idade,
    //profissao: profissão2
//}
//console.log (objetoUsuario)

// 2-

const filme1 = {
    nome: "Crepusculo",
    anoLançamento: 2008
}

const filme2 = {
    nome: "Lua Nova",
    anoLançamento: 2009
}

function compararFilmes (fil1, fil2) {
    const comparaDiferença = fil1 > fil2
    const compararIgualdade = fil1 === fil2
    console.log (`O primeiro filme foi lançado antes do segundo? ${comparaDiferença}`)
    console.log (`O primeiro filme foi lançado no mesmo ano do segundo? ${compararIgualdade}`)
}

compararFilmes (filme1.anoLançamento, filme2.anoLançamento)

2

// 3-

function estoque(fruta) {
    return ({...fruta, disponibilidade: !frutas1.disponibilidade})

}

estoque (frutas1)
estoque (frutas2)
estoque (frutas3)
console.log(estoque(frutas1))
console.log(estoque(frutas2))
console.log(estoque(frutas3))