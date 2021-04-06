const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

function eighteenOrAbove(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 18) {
      return false;
    }
  }
  return true;
}

function eighteenOrAboveWithEvery(array) {
  return array.every((age) => age > 18);
}

console.log(eighteenOrAbove(ages))
console.log(eighteenOrAbove(moreAges))
console.log(eighteenOrAboveWithEvery(ages))
console.log(eighteenOrAboveWithEvery(moreAges))