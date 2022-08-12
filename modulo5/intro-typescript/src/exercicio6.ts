function calculate (num1: number, num2: number) : string {
    const soma: number =  num1 + num2
    const subtração: number = num1 - num2
    const multiplicação: number = num1 * num2
    let maiorNumero: number
    

    if (num1 > num2) {
    maiorNumero = num1;
  } else {
    maiorNumero = num2;
  }
    return `A Soma dos dois numeros é ${soma}. A subtração dos dois numeros é ${subtração}. 
    A multiplicação dos dois números é ${multiplicação}. O maior numero é: ${maiorNumero}.`
}

console.log(calculate(2, 4))