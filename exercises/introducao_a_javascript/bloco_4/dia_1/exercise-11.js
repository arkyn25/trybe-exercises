//exercicio 11
let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let valorIR;
let aliquotaIR
let aliquotaINSS;
let salarioFinal;

if (salarioBruto <= 1556.94) {
  console.log("aliquota 8%")
  aliquotaINSS = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  console.log("aliquota de 11%")
  aliquotaINSS = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  console.log("aliquota de 11%")
  aliquotaINSS = salarioBruto * 0.11;
}
else {
  console.log("aliquota maxima de 570,88")
  aliquotaINSS = 570.88;
}
salarioLiquido = salarioBruto - aliquotaINSS;
console.log("Salario liquido com reducao de inss eh de: " + salarioBruto + " - " + aliquotaINSS + " = " + salarioLiquido);
//imposto de renda

salarioSemINSS = salarioBruto - aliquotaINSS
if (salarioSemINSS <= 1903.98) {
  console.log("Isento de imposto");
  aliquiotaIR = 0;
  reduIR = 0;
}
else if (salarioSemINSS >= 1903.99 && salarioSemINSS <= 2826.65) {
  console.log("aliquiota de 7,5% reduzir parcela de 142,80 de imposto")
  aliquotaIR = salarioSemINSS * 0.075;
  reduIR = 142.80
}
else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
  console.log("aliquota de 15% e reduzir parcela de 354,80 de imposto")
  aliquotaIR = salarioSemINSS * 0.15;
  reduIR = 354.80
}
else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
  console.log("aliquota de 22,5% reduzior parcela de 636,13 de imposto")
  aliquotaIR = salarioSemINSS * 0.225;
  reduIR = 636.13
}
else {
  console.log("aliquota de 27,5% parcela de 869,36 de imposto")
  aliquotaIR = salarioSemINSS * 0.275;
  reduIR = 869.36;
}
salarioFinal = salarioSemINSS - (aliquotaIR - reduIR);
console.log("Salario final de: " + salarioSemINSS + " - (" + aliquotaIR + " - " + reduIR + ") = " + salarioFinal);