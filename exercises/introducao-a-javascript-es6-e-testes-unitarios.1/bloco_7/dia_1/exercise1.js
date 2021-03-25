// Exercise 1 Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} +  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// Exercise 1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a, b) {
  return a - b;
})

console.log(`os numeros ${oddsAndEvens} estao ordenados`);
// Exercise bonus

// sort em uma linha
console.log(`os numeros ${oddsAndEvens.sort((a, b) => a - b)}`);

//------------------------------------------------------

// Parte II 1 Crie uma função que receba um número e retorne seu fatorial.
const fatorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
    result *= index
  }
  return result;
}

console.log(fatorial(6))

// Outra forma
const fatorialNumber = (n) => {
  if(n == 0) {
    return 1;
  }
  let resp = n;
  while (n > 2) {
    resp *= --n;
  }
  return resp;
}
console.log(`Numero ${fatorialNumber(6)}`)

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva
const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1
console.log(fatorial(6))

// Exercise 2 Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = text => {
  letraArray = text.split(' ');
  maxLength = 0;
  result = '';

  for (const letra of letraArray) {
    if (letra.length > maxLength) {
      maxLength = letra.length;
      result = letra
    }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))
//-----------------------------------

// Exercise 4 - Crie um código JavaScript com a seguinte especificação:
