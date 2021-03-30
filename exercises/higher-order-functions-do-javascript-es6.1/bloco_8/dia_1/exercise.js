const employerGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employerGenerator));


// Sorteio  
const checkNumero = (meuNumero, number) => meuNumero === number;

const sorteio = (meuNumero, retorno) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return retorno (meuNumero, number) ? 'Parabens voce acertou' : 'Tente novamente';
}

console.log(sorteio(2, checkNumero));

// exercicio 3

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checkAnswer = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer(correctAnswer)(userAnswer));


// Exercicio 4

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado: ${contador}`;
}

console.log(check(rightAnswers, studentAnswers, (resposta1, resposta2) => {
  if (resposta1 === resposta2) {
    return 1;
  } if (resposta2 === 'n/a') {
    return 0;
  }
  return -0.5;
}))

// bonus jogo

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const minDmg = 15;
  const strength = dragon.strength;
  const dragonDmg = Math.floor(Math.random() * (strength - minDmg) + minDmg);
  return dragonDmg;
}

console.log(dragonAttack());

const warriorAttack = () => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg)
  return warriorDmg;
}
console.log(warriorAttack());

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (magoAttack) => {
    const mageTurnStats = magoAttack();
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  monsterTurn: (monsterAttack) => {
    const dragonDamage = monsterAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  }
  turnResults: () => battleMembers,
}

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(magoAttack);
gameActions.monsterTurn(dragonAttack);
console.log(gameActions.turnResults());
