type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) usaria o comando tsc = nome do arquivo com extenção

//c) se estivesse dentro da pasta poderia rodar o mesmo comando, porém o arquijo JS ficaria nessa mesma pasta.

/*
d) Sim, utilizando a pasta build e rodando o comando npm start depois de criar o script: 
 "start": "tsc && node ./build/exercicio3.js"
 */
