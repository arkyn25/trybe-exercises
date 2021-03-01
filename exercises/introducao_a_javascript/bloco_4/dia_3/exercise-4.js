//4- Depois, faça uma pirâmide com n asteriscos de base:

//n = 5
////*
///***
//*****
let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let meio = (n + 1) / 2;
let left = meio;
let right= meio;

for (lineIndex = 0; lineIndex <= meio; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > right && lineColumn < left) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  right -= 1;
  left += 1;
};