// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = prompt ("Informe uma altura")
 const largura = prompt ("Informe uma largura")
 console.log ( Number (altura) * Number (largura))
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt ("Qual ano nós estamos?")
  const anoNascimento = prompt ("Qual ano você nasceu?")
  console.log(+anoAtual - +anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario = prompt ("Qual seu nome?")
const idadeUsuario = prompt ("Qual sua idade?")
const emailUsuario = prompt ("Qual seu e-mail?")
console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt ("Qual sua primeira cor favorita?")
  const cor2 = prompt ("Qual sua segunda cor favorita?")
  const cor3 = prompt ("Qual sua terceira cor favorita?")
  console.log ([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  array[0] = ultimo;
  array[array.length - 1] = primeiro;
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const string000 = string1.toLowerCase()
const string001 = string2.toLowerCase()
return string000 === string001
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  //Passo 1: perguntar ao usuario as infos solicitadas.
  const anoAtual = prompt ("Qual o ano atual?")
  const anoNascimento = prompt ("Qual ano você nasceu?")
  const anoEmissaoIdentidade = prompt ("Qual ano você emitiu sua identidade?")
  //Passo 2: descobrir a idade do usuario
  function idade (anoAtual, anoNascimento) {
    const idade = +anoAtual - +anoNascimento
    return idade
  }
  //Passo 3: comparar idade do usuario
  const idade20 = idade <= 20
  const idade20E50 = idade > 20 <= 50
  const idade50 = idade > 50
  //Passo 4: decobrir quando renovar
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 // implemente sua lógica aqui
 function toBoolean(valor) {
  return valor.toLowerCase() === 'sim' ? true : false;
}

// implemente sua lógica aqui
const maiorIdade = prompt ("Você tem mais de 18 anos?")
const ensinoMedio = prompt ("Você tem o ensino médio completo?")
const horarioCurso = prompt ("Você tem disponibilidade exclusiva no horario do curso?")

const isMaiorIdade = toBoolean(maiorIdade);
const isEnsinoMedio = toBoolean(ensinoMedio);
const isHorarioCurso = toBoolean(horarioCurso);

const resultado = isMaiorIdade && isEnsinoMedio && isHorarioCurso;

console.log(resultado);

return resultado;
}
