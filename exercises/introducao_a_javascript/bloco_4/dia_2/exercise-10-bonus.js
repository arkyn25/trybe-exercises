//Exercise 1: Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);
// Forma resumida
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a, b) {
  return a - b;
})

console.log(`numeros ${numbers} ordenados`)
// Forma ainda mais resumida
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(`numeros ${numbers.sort((a, b) => a - b)}`)