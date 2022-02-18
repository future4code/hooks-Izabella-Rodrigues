// Crie um array com pelo menos 5 raças de cachorro
const cachorros = ["poodle", "beagle", "pitbull", "labrador", "pincher"]


// Peça para o usuário inserir um número de 1 a 5

const numero = Number(prompt("insira um número de 1 a 5"))

// Imprima no console a raça correspondente à posição escolhida pelo usuário

const indice = numero -1
console.log(` o numero inserido é ${numero}, logo o índice é ${indice}`)
console.log(cachorros[indice])
