//exercise 06
let xadrez;
xadrez = "QUEEN";

switch (xadrez.toLowerCase()) {
  case "rei":
    console.log("Move uma casa por vez em qualquer direcao");
    break;
  case "cavalo":
    console.log("Move tres casas em L");
    break;
  case "bispo":
    console.log("Move em diagnoal para qualquer lado, todas as casas");
    break;
  case "torre":
    console.log("Move todas as casas em linha reta qualquer direcao");
    break;
  case "peao":
    console.log("Move 1 casa em linha reta e come diagonal");
    break;
  case "queen":
    console.log("move quantas casas quiser em qualquer direcao");
    break;
  default:
    console.log("Peca invalida, movimento nao confere")
}
