```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const salarioBase = 2000
  const porcentagemPorVenda = (valorTotalVendas*5)/100
  const valorPorCarroVendido = qtdeCarrosVendidos * 100
  const salarioTotal = salarioBase + porcentagemPorVenda + valorPorCarroVendido
  return salarioTotal
}```