  // Mostra 
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  const listSkills = (student) => {
    const arraySkills = Object.keys(student);
    for (index in arraySkills) {
      console.log(`${arraySkills[index]}, Nivel: ${student[arraySkills[index]]}`)
    }
  }

  console.log('Estudante 1');
  listSkills(student1)


  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  console.log(Object.entries(student))
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsWithFor(student));
  
  // Com Object.values
  console.log(listSkillsWithValues(student));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};


const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const person = {
  nome: 'Arlen',
  sobreNome: 'Freitas',
  idade: 28
}
const cidade = {
  city: 'montes claros',
  estado: 'minas gerais'
}

Object.assign(person, cidade)
console.log(person);


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);