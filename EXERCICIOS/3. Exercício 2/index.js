// Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:

const frase = prompt("escreva algo")

// Todas as letras maiúsculas;

const fraseMaiuscula = frase.toUpperCase()
console.log("toUpperCase:", fraseMaiuscula)

// Na língua do i (substituindo a vogal "o" por "i");

const fraseLinguaI = frase.replaceAll("o", "i")
console.log("replaceAll:", fraseLinguaI )

// O tamanho da frase.

console.log("length:", frase.length)

// Extra: método trim()

console.log(frase.trim())

// Extra: método includes()

console.log("includes:", frase.includes("hooks"))
console.log("includes:", frase.includes("bananinha"))





