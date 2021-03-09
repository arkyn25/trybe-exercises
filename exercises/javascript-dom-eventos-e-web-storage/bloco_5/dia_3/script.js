function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercise 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function listOfDaysMonth(){

  for(let index = 0; index < dezDaysList.length; index++){
    let listDays = document.createElement('li');
    listDays.innerHTML = dezDaysList[index];
    listDays.className = 'day';
    if(dezDaysList[index] == 24 || dezDaysList[index] == 31){
      listDays.className = 'day holiday';
    }
    else if(dezDaysList[index] == 4 || dezDaysList[index] == 11 ||dezDaysList[index] == 18){
      listDays.className = 'day friday';
    }
    else if(dezDaysList[index] == 25){
      listDays.className = 'day holiday friday';
    }
    document.querySelector('#days').appendChild(listDays);
  };
};

listOfDaysMonth();

// Exercise 2

function holidayButton(name){

  let button = document.createElement('button');

  button.innerText = name;

  button.id = 'btn-holiday';

  document.querySelector('.buttons-container').appendChild(button);
};

holidayButton('Feriados');

// Exercise 3

function changeColorHolidays(){
  let buttonFeriados = document.querySelector('#btn-holiday');

  function changeBackground(){
  
    let holiday = document.querySelectorAll('.holiday');
    console.log(holiday);
    for(let index = 0; index < holiday.length; index++){
      if( holiday[index].style.backgroundColor === 'white'){
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      }
      else{
        holiday[index].style.backgroundColor = 'white';
      }
    }
  }
  buttonFeriados.addEventListener('click',changeBackground);
};

changeColorHolidays();

// Exercise 4

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

// Exercise 5

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// Exercício 6

let days = document.querySelector('#days');

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

//Exercício 7

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

// Exercício 8

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// Exercício 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// Exercise 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();