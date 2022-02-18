// FRASE

const frase = "      Olá hooks! Como está a aula de Strings e Arrays?    "

// propriedade length

console.log("length:", frase.length)

// método toLowerCase()

console.log("toLowerCase:", frase.toLowerCase())

// método toUpperCase()

console.log("toUpperCase:", frase.toUpperCase())

// método trim()

console.log("trim:", frase.trim())

// método includes()

console.log("includes // hooks:", frase.includes("hooks"))
console.log("includes // bananinha:", frase.includes("bananinha"))

// método replaceAll()

const novaFrase = frase.replaceAll("hooks", "turma")
console.log("replaceAll // hooks => turma:", novaFrase)