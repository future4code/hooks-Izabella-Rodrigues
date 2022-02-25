// Exercicios interpretação código

// 1 -
/* a) O código testa um numero recebido pelo usuario.
Se o numero for multiplo de 2 passa no teste.
Se o numero não for multiplo de 2 não passa no teste.*/

// b) Todos os numeros inteiros multiplos de 2

// c) Todos os numeros inteiros que não são multiplos de 2.

// 2- 
// a) O código serve para verificar o preço de cada fruta

// b) "O preço da fruta maçã é R$ 2,25"

// c) "O preço da fruta  Pêra  é  R$  5"

// 3- 
// a) A primeira linha esta pedindo um numero para o usuario

/* b) 10 = "Esse número passou no teste"
      -10 = erro no console */

// c) Sim, ha um erro, porem não entendi pq ele acontece.

// Exercicios de Escrita de código

// 1 -

/*const idade = prompt ("Qual sua idade?")
const idadeUsuario = Number (idade)

    if (idadeUsuario >= 18) {
        console.log ("Você pode dirigir")
    } 
    else  {
        console.log ("Você não pode dirigir")
    }*/
    

// 2 -

/*const turnoEstudo = prompt ("Digite M para Matutino, V para Vespertino ou N para Noturno")

    if (turnoEstudo.toUpperCase() === "M") {
        console.log ("Bom dia!")
    } else if (turnoEstudo.toUpperCase() === "V") {
        console.log ("Boa tarde")
    } else if (turnoEstudo.toUpperCase() === "N") {
        console.log ("Boa noite!")
    } else {
        console.log ("Não encontrado")
    }


// 3 -
const turnoEstudo2 = prompt ("Digite M para Matutino, V para Vespertino ou N para Noturno")

switch (turnoEstudo2.toUpperCase()) {
    case "M":
        console.log ("Bom dia!")
        break;
    case "V":
        console.log ("Boa tarde!")
        break;
    case "N": 
        console.log ("Boa noite!")
        break;
    default:
        break;
} */

// 4 -

/*const generoFilme = prompt ("Qual o genero do filme?")
const valorIngresso = prompt ("Qual o valor do ingresso?")


    if (generoFilme === "fantasia") {
        if (valorIngresso +valorIngresso <= 15) {
            console.log ("Bom filme")
        }
    } else {
        console.log ("Escolha outro filme")
    }
*/

// Desafios

// 1- 




// 2-

const nomeCompleto = prompt ("Qual seu nome completo?")
const tipoJogo = prompt ("O jogo é IN (internacional) ou DO (doméstico)")
const etapaJogo = prompt ("Qual a etapa do jogo? SF(semi-final), DT(decisão terceiro lugar) ou FI (final)")
const categoria = Number(prompt ("Qual a categoria? 1, 2, 3 ou 4"))
const quantidadeIngresso = Number (prompt ("Quantos ingressos você quer comprar?"))

let valorIngresso //valor do ingresso de acordo com a etapa e categoria

switch (etapaJogo) {
    case "SF": {
        switch (categoria) {
            case 1: 
            valorIngresso = 1320
            break;
            case 2: 
            valorIngresso = 880
            break;
            case 3: 
            valorIngresso = 550
            break;
            case 4: 
            valorIngresso = 220
            break;
        }   
    }
    case "DT": {
        switch (categoria) {
             case 1: 
            valorIngresso = 660
            break;
            case 2: 
            valorIngresso = 440
            break;
            case 3: 
            valorIngresso = 330
            break;
            case 4: 
            valorIngresso = 170
            break;
    }
    }
    case "FI": {
        switch (categoria) {
            case 1: 
            valorIngresso = 1980
            break;
            case 2: 
            valorIngresso = 1320
            break;
            case 3: 
            valorIngresso = 880
            break;
            case 4: 
            valorIngresso = 330
            break;
    default:
        valorIngresso = 0
}
}
}

let ingresso = tipoJogo // informa se o ingresso é internacional ou domestico
    switch (tipoJogo) {
    case "IN":
        ingresso = (valorIngresso * 4.10)
        break;
    default:
        ingresso = valorIngresso
        break;
    }    

    console.log (ingresso)
    

let tipo = tipoJogo // qual tipo de jogo
switch (tipoJogo) {
    case "IN":
        tipo = "Internacional"
        break;
    case "DO":
        tipo = "Doméstico"
        break;
    default:
        tipo = "Não encontrada" 
}


let etapa = etapaJogo // qual etapa do jogo
switch (etapaJogo) {
    case "SF":
        etapa = "Semifinais"
        break;
    case "DT":
        etapa = "Decisão do 3° Lugar"
        break;
    case "FI":
        etapa = "Final"
        break;
        default:
        etapa = "Não encontrada"

}

const valorTotal = (ingresso * quantidadeIngresso)


console.log (
` --- Dados da compra ---
 Nome do cliente: ${nomeCompleto}
 Tipo do Jogo: ${tipo}
 Etapa do Jogo: ${etapa}
 Categoria: ${categoria}
 Quantidade de Ingressos: ${quantidadeIngresso}
 --- Valores ---
 Valor do ingresso: R$ ${ingresso}
 Valor total: R$ ${valorTotal} `)
