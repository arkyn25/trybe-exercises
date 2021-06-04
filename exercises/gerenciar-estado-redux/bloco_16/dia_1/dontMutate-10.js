// 10 - Por que nunca modificar um state ?
// Existe um storee reducerno editor de código para gerenciar itens de tarefas pendentes. Termine de escrever o ADD_TO_DOcaso no redutor para anexar uma nova tarefa ao estado. Existem algumas maneiras de fazer isso com JavaScript ou ES6 padrão. Veja se você consegue encontrar uma maneira de retornar uma nova matriz com o item de action.todoanexado ao final.

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);