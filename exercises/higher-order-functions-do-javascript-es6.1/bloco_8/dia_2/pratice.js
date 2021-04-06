// verfica se estudante foi aprovado usando forEach
const students = [ 
  { name: 'Arlen', grade: 59, approved: '' },
];

function verificaNota() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado'
    } else {
      students[index].approved = 'Recuperacao';
    }
  })
}
verificaNota();

console.log(students);

// acha o primeiro numero divisivel por 5 usando find
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 2 === 0);

console.log(firstMultipleOf5);
// 50

// lista de aprovados com forEach
let aprovados = [
  'arlenfreitas1@gmail.com',
  'derektrevo@gmail.com'
];
const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

aprovados.forEach((item, position) => {
  enviarEmail(item);
  console.log(`Sua posicao eh de: ${position}`)
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);


// colocar nomes uppercase usando forEach
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((value) =>  console.log(value))

const forEach = (array, callbackfn) => {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    callbackfn(value, index, array);
  }
}
forEach(numbers, (value, index, array) => console.log(value));

// ----------------------

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const lessThan18 = (array) => {
  for (let index = 0; index < ages.length; index += 1) {
    if (array[index] < 18) {
      return true;
    }
  }
  return false;
}

const lessTan18ForEach = (array) => {
  return array.some(age => age < 18)
}

console.log(lessThan18(ages));
console.log(lessThan18(moreAges));
console.log(lessThan18ForEach(ages));


// sort 

const pizzas = ['frango com catupiry', 'marguerita', 'gratinada', '4 queijos'];
const numbers = [1, 3, 4, 7, 5, 6, 2, 8, 9, 10];

// const compare = (a, b) => {
//   return a - b

  // if (a < b) {
  //   return -1;
  // }
  // if (a > b) {
  //   return 1;
  // }
  // return 0;
// }
// console.log(pizzas.sort());

console.log(numbers.sort((a, b) => a - b));

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// array.map cria um novo array de objetos
let pessoasAprovadas = [
  'fulano@email.com',
  'siclano@email.com',
  'beltrano@email.com'
];

const enviarEmail = (objetoEmail) => {
  console.log(`email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`)
};

let listaEmails;

listaEmails = pessoasAprovadas.map((email) => {
  return { email: email,  nota: 10}
});

listaEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));

// cria array de objetos com for
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// cria array de objetos com array.map

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// transformar numeros em negativo usarndo array.map

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// unindo dois objetos em um novo array usando array.map
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

// retorna todos os nomes do objeto usando filter e map
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const allNameStudents = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents);

// retornar um nome e status de um objeto usando find e map
const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', estudantes));

// somando aray de numeros usando reduce
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// somar todos os numeros pares usando reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

const result = [1, 2, 3, 4, 5].reduce((aculador, elemento) => aculador + elemento, 0);
console.log(result)