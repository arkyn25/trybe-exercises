let n = 5;
let asterisco = '*';
let linha = '';
let inputPosition = n;

for (let index = 0; index < n; index += 1) {
  for (let cIndex = 0; cIndex <= n; cIndex += 1) {
    if (cIndex < inputPosition) {
      linha = linha + ' ';
    } else {
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = '';
  inputPosition -= 1;
};