//Exercicio 01

function person(nome : string, dataNascimento : string ) : string {

   let dataSeparada: Array<string> = dataNascimento.split("/", 3)
   let dia : string = dataSeparada[0]
   let mes : string = dataSeparada[1]
   let ano : string = dataSeparada[2]

   let meusDados : string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`

   return meusDados 
}

console.log (person ("Izabella", "11/09/1999"))

//Exercicio 02
