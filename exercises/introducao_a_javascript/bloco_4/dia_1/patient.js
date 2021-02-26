//utilize typeof para imprimer qual tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . 
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId);

console.log(typeof isEnrolled);

console.log(typeof patientInfo);

console.log(typeof patientEmail);
//O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? Experimente executar o comando console.log(typeof patientAge) 
console.log(typeof patientAge);

//Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log()
let patientId = "50";
console.log(typeof patientId);

//retangulo
const base = 8;
const altura = 5;
let area;
let perimetro;
area = (base *altura);
console.log("Area: "+ area);
console.log("Perimetro: " + perimetro);