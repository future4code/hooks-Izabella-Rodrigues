// ---------- Exemplos ----------

// let coxinha = 0;

// while( coxinha <= 20   ){
//     console.log(`comi ${coxinha} coxinhas`)
  
//    coxinha += 3
//    //coxinha = coxinha + 3
//   // coxinha++
//    //coxinha = coxinha + 1
// }

//console.log("nao entrei no loop")





//exemplo com for:
//para ( começando ; indo até ; incrementa 1)
//    for ( let coxinha = 0 ; coxinha < 10 ; coxinha++){
//     console.log(`comi ${coxinha} coxinhas`)
// }

















//---------- Exercício 1 ---------- 


let numeroUsuario ;
let soma  = 0;

while(numeroUsuario !== 0 ){
    numeroUsuario = Number(prompt("insira um numero"))
     soma += numeroUsuario
   
 }

console.log( soma )








//----------  Exercício 2 ---------- 

// let arrayDeNumeros = [ 11,15,18,14,12,13] ; // cria um array

// // function devolveMaiorNumero( array ) {  // cria uma funcao que recebe um array
//     let maiorNumero = 0

//   for( let posicao = 0 ; posicao < array.length ; posicao++ ){
        // repete a ação de verificar os numeros de dentro do array
    //   const numeroDoArray = array[posicao] // armazenei o item do array , com a posição do for, na variavel
       
//         if( numeroDoArray > maiorNumero ){ // verifiquei se o numero do array é maior que o numero comparado 
//             maiorNumero = numeroDoArray;  
//         }


//     }
//     return `o maior numero é ${maiorNumero}` // retorna na função a frase com o numero maior
// }


// console.log(   
//     devolveMaiorNumero(arrayDeNumeros)  // mostrar o retorno da função no console
    
//     )


 
//     let arrayDeNumeros = [ 11,15,18,14,12,13] ; 

// //  para( a variavel  do array )
//     for(  let numeroDoArray of arrayDeNumeros ){
//         console.log( numeroDoArray )
//     }





















//----------  Exercício 3 ---------- 

// const arrayDePalavras = [ " Oi" , "sumido" , "tudo" , "bem " , "saudades"]

// let mensagem = " "


// function mostrarMensagem( array ){
    
//     for(let i = 0 ; i < arrayDePalavras.length ; i++ ){
//         const palavraDoArray = arrayDePalavras[i]
//         mensagem += palavraDoArray + " "
//     } 
//     return mensagem
// }

// console.log(   mostrarMensagem(arrayDePalavras)   )



//---- exercicio 3 - for of -------


const arrayDePalavras = [ " Oi" , "sumido" , "tudo" , "bem " , "saudades"]

let mensagem = " "
function mostrarMensagem( array ){
     
    for(let palavraDoArray of array){ 
       //let i = 0 ; i < arrayDePalavras.length ; i++ 
       //const palavraDoArray = arrayDePalavras[i]

        mensagem += palavraDoArray + " "
    } 
    return mensagem
}

console.log(   mostrarMensagem(arrayDePalavras)   )
