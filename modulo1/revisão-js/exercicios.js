// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort(function compare(a, b){
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
   })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((array) => {
     return array % 2 === 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrayPar = array.filter((array) => {
      return array % 2 === 0
   }).map((item) => {
      return item ** 2
   })
      return arrayPar
}     

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   const meuObjeto = {maiorNumero: Math.max(num1, num2),
   maiorDivisivelPorMenor: (Math.max(num1, num2)) % (Math.min(num1, num2)) === 0,
   diferenca: (Math.max(num1, num2)) - (Math.min(num1, num2))
   } 
   return meuObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA !== ladoB && ladoB !== ladoC && ladoA!== ladoC){
      return "Escaleno";
   } else if(ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero";
   } else {
      return "Isósceles";
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   const novoArray = []
   let array2 
      return array.filter((item) => {
      Math.max.apply(null, array)
      Math.min.apply(null, array) 
      
      
      return array2 [Math.max.apply(null, array2), Math.min.apply(null, array2)]
   }) 
    
}
   


     


   

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
    }
     return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = []
   for (let pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
      pessoasAutorizadas.push(pessoa)
   }
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   let pessoasNaoAutorizadas = []
   for (let pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
      pessoasNaoAutorizadas.push(pessoa);
   }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
     const contasAtualizadas = conta.saldoTotal -= totalDeCompras
    })
    return contasAtualizadas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   return consultas.sort(function compare(a, b){
      if (a.nome > b.nome) return 1;
      if (a.nome < b.nome) return -1;
      return 0;
   })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   for (let data of consultas.dataDaConsulta){
      let 
      return consultas.dataDaConsulta.getTime()
   }





}