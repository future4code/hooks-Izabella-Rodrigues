//Exercicio 01


// a) Utilizamos o process.argv a partir do indice 2, pois os dois primeiros indices são padrão: indice 0 = node 
// indice 1 = nome do arquivo.

// b)

const nome = process.argv [2]
const idade = Number(process.argv [3])

const nomeEIdade = (`Olá ${nome}! Você tem ${idade} anos`)


console.log (nomeEIdade)

// c) 

const idade7Anos = Number (idade + 7)

console.log (`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade7Anos}.`)

//Exercicio 2


