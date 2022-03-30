function calculaNota(ex, p1, p2) {
function calculaNota(ex, p1, p2) {
    const pesoExercicios = 1
    const pesoProva1 = 2
    const pesoProva2 = 3
    const mediaNota = (ex * pesoExercicios) + 
    (p1 * pesoProva1) + (p2 * pesoProva2)
    const pesoTotal = pesoExercicios + pesoProva1 + pesoProva2
    const notaFinal = mediaNota / pesoTotal
    if (notaFinal >= 9){
      return "A"
    } else if (notaFinal <9){
        if (notaFinal >= 7.5)
      return "B"
    } else if (notaFinal <7.5) {
        if (notaFinal>= 6)
        return "C"
    }else {
      return "D"
    }
  }