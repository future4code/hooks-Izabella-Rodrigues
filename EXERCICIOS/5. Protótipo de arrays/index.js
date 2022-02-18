// array
const cores = ["azul", "roxo", "laranja", "vermelho", "verde"]

// quantos elementos o array tem

console.log("length:", cores.length)

// utilizando o método includes

console.log("includes // verde :", cores.includes("verde"))
console.log("includes // branco :", cores.includes("branco"))

//adicionando uma cor

cores.push("branco")
console.log("push", cores)

//removendo o último elemento do array

cores.pop()
console.log("pop" , cores)

//removendo as cores azul e roxo

cores.splice(0,2)
console.log("splice" , cores)





