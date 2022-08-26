//a)

function obterEstatisticas(numeros: Array<number>)  {

    const numerosOrdenados : Array<number> = numeros.sort(
        (a : number, b : number) => a - b
    )

    let soma : number = 0

    for (let num of numeros) {
        soma += num
    }
    type Estatistica = {
        maior: number
        menor: number
        media: number
    }

    const estatistica : Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatistica
}

console.log(obterEstatisticas([1, 5, 10, 15, 20 ]))