//a)
let minhaString : string = "Ola"

//minhaString = 2

// o comportamente foi um erro na nova declaração informando que numeros não se "relacionam" com strings.

//b)

let meuNumero : number | string = 2


//c) 

type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}

/*let person1: Person = {
    nome: "Izabella",
    idade: 22,
    corFavorita: "Azul"
}

let person2: Person = {
    nome: "Luan",
    idade: 25,
    corFavorita: "Verde"
}

let person3: Person = {
    nome: "Ana",
    idade: 33,
    corFavorita: "Preto"
}
*/

//d)

enum corArcoIrisFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

let person1: Person = {
    nome: "Izabella",
    idade: 22,
    corFavorita: corArcoIrisFavorita.AZUL
}

let person2: Person = {
    nome: "Luan",
    idade: 25,
    corFavorita: corArcoIrisFavorita.VERDE
}

let person3: Person = {
    nome: "Ana",
    idade: 33,
    corFavorita: corArcoIrisFavorita.VERMELHO
}

console.log(person1, person2, person3)