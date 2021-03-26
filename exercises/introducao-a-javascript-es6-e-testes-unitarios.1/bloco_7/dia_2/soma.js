const assert = require('assert');

const summationOf = (number) => {
  if (typeof(number) !== 'number') {
    throw new Error('Por favor, utilize apenas numeros')
  }
  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }
 
  return summation
};
assert.strictEqual(typeof(summationOf), 'function');
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6)
assert.strictEqual(summationOf(5), 15)
assert.throws(() => {
  summationOf([])
})

console.log(summationOf())