function sum(a, b) {
  return a + b;
}
console.log(sum(5, 4));

function sum(a, b) {
  return a - b;
}
console.log(sum(5, 4));

function sum(a, b) {
  return a * b;
}
console.log(sum(5, 4));

function sum(a, b) {
  return a / b;
}
console.log(sum(5, 4));

function sum(a, b) {
  return a % b;
}
console.log(sum(5 % 4));
//------------------------------
//02
function maiorQue(a, b) {
  return a > b;
}
console.log(maiorQue(5, 4));

function menorQue(a, b) {
  return a < b;
}
console.log(menorQue(5, 4));
//------------------------------
//03
function maioresQue(a, b, c) {
  if (a > b && a > c) {
    console.log("a eh maior") 
  } else if (b > a && b > c) {
    console.log("b eh maior dos 3 variaveis")
  } else {
    console.log("c eh maior dos 3 variaveis")
  }
  return a, b, c;
}
console.log(maioresQue(5, 10, 15));
//------------------------------
//04 
function numeroNegativo(numero) {
  if (numero > 0) {
    console.log("Positivo")
  }
  else if (numero < 0) {
    console.log("Negativo")
  }
  else {
    console.log("Zero");
  }
  return numero;
}
console.log(numeroNegativo(-5));
//------------------------------
//05 
function triangulo(base, altura, area){

  if ((base + altura + area)==180) {
    console.log("Angulos do triangulo verdadeiro")
  }
  else {
    console.log("Angulos do triangulo falso")
  }
  return base + altura + area;
}
console.log(triangulo(60, 60,  60));
//------------------------------
//06
let xadrez = "QUEEN";
let rei;
let cavalo;
let bispo;
let torre;
let peao;
let queen;
function chess(rei, cavalo, bispo, torre, peao, queen){
  
  switch (xadrez.toLowerCase()) {
    case "rei":
      return ("Move uma casa por vez em qualquer direcao");
      break;
    case "cavalo":
      return ("Move tres casas em L");
      break;
    case "bispo":
      return ("Move em diagnoal para qualquer lado, todas as casas");
      break;
    case "torre":
      return ("Move todas as casas em linha reta qualquer direcao");
      break;
    case "peao":
      return ("Move 1 casa em linha reta e come diagonal");
      break;
    case "queen":
      return ("move quantas casas quiser em qualquer direcao");
      break;
    default:
      return ("Peca invalida, movimento nao confere")
  }
  return rei, cavalo, bispo, torre, peao, queen;
}
console.log(chess(rei, cavalo, bispo, torre, peao, queen))
//-------------------------
//07
function notas(nota) {
  if (nota > 100) {
    console.log("Nota Invalida")
  }
  else if (nota >= 90) {
    console.log("A");
  }
  else if (nota >= 80) {
    console.log("B");
  }
  else if (nota >= 70) {
    console.log("C");
  }
  else if (nota >= 60) {
    console.log("D");
  }
  else if (nota >= 50) {
    console.log("E");
  }
  else if (nota <= 50) {
    console.log("F");
  }
  else {
    console.log("Nota Invalida")
  }
  return nota;
}
console.log(notas(85));
//-------------------------
//08
function numerosPares(numA, numB, numC) {
  if (numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0) {
    console.log("True")
  }
  else {
    console.log("False")
  }
  return numA, numB, numC;
}

console.log(numerosPares(13, 10, 25));
//--------------------------
//09
function numerosImpares(numA, numB, numC) {
  if (numA % 2 != 0 || numB % 2 != 0 || numC % 2 != 0){
    console.log("True")
  }
  else {
    console.log("False")
  }
  return numA, numB, numC;
}

console.log(numerosImpares(13, 23, 25));
//--------------------------
//10
function lucros(lucro) {
  let valorCusto = 60;
  let valorVenda = 120;
  let qtProdutoVendidos = 1000;
  let impostoSobreOCusto = valorCusto*0.2;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucros = valorVenda - valorCustoTotal;

  if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro lucro nao obtido")
  }
  else {
    console.log("Custo do produto: " + valorCusto);
    console.log("O imposto do custo do produto é de 20%: " + impostoSobreOCusto);
    console.log("O custo total do produto é: " + valorCustoTotal)
    console.log("O valor de venda do produto é: " + valorVenda);
    console.log("O lucro da venda é de: " + lucros);
    console.log("A venda de 1000 produtos tem lucro de: " + lucros * 1000);
  } 
  return lucro;
}
console.log(lucros());
//-------------------------
//11 
let salarioBruto = 1910;
let salarioBase;
let salarioLiquido;
let valorIR;
let aliquotaIR
let aliquotaINSS;
let salarioFinal;
let salarioSemINSS
function calculaSalario(salarioBase, salarioLiquido, valorIR, aliquotaIR, aliquotaINSS, salarioFinal, salarioBruto, salarioSemINSS) {
  //exercicio 11
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

  return salarioBase, salarioLiquido, valorIR, aliquotaIR, aliquotaINSS, salarioFinal, salarioBruto;
  
}
console.log(calculaSalario(salarioBase, salarioLiquido, valorIR, aliquotaIR, aliquotaINSS, salarioFinal, salarioBruto, salarioSemINSS));

