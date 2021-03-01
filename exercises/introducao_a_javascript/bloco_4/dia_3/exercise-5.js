//Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
//n = 7

//// *
/// * *
// *   *
//*******

let num = 7;
let middle = (num + 1) / 2;
let left = middle;
let right = middle;
let asterisk = '*';
for (let line = 1; line <= middle; line += 1) {
  let spaceLine = '';
  for (let col = 1; col <= num; col += 1 ) {
    if (col == left || col == right || line == middle) {
      spaceLine += asterisk;
    } else {
      spaceLine += ' ';
    }
  }
  left -= 1;
  right += 1;
  console.log(spaceLine);
};
