/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
    const carta = comprarCarta()

   console.log ("Boas vindas ao jogo Blackjack!")
      let confirmUser = confirm ("Quer iniciar uma nova rodada?")
         if (confirmUser == false) {
         console.log ("O jogo acabou!")
      }  else (confirmUser == true); {
            const carta1User = comprarCarta()
            const carta2User = comprarCarta()
            const resultadoFinalUser = carta1User.valor + carta2User.valor
            console.log(`Usuario - cartas: ${carta1User.texto} ${carta2User.texto} - ${resultadoFinalUser}`)

            const carta1Comp = comprarCarta()
            const carta2Comp = comprarCarta()
            const resultadoFinalComp = carta1Comp.valor + carta2Comp.valor
            console.log(`Usuario - cartas: ${carta1Comp.texto} ${carta2Comp.texto} - ${resultadoFinalComp}`)
            
            if (resultadoFinalComp === resultadoFinalUser); {
               console.log ("Empate!")
            } else if (resultadoFinalComp > resultadoFinalUser); {
               console.log ("O computad<or ganhou!")
            } else (resultadoFinalComp < resultadoFinalUser); {
               console.log("O usuario ganhou!")
            }   
      
      
      
      
   }

      
      
   
    
      



