let valorCusto = 60;
let valorVenda = 120;
let qtProdutoVendidos = 1000;
let impostoSobreOCusto = valorCusto*0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro lucro nao obtido")
}
else {
  console.log("Custo do produto: " + valorCusto);
  console.log("O imposto do custo do produto é de 20%: " + impostoSobreOCusto);
  console.log("O custo total do produto é: " + valorCustoTotal)
  console.log("O valor de venda do produto é: " + valorVenda);
  console.log("O lucro da venda é de: " + lucro);
  console.log("A venda de 1000 produtos tem lucro de: " + lucro * 1000);
}