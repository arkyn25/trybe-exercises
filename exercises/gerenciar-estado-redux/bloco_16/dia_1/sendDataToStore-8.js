// 8 - Enviando dados através das actions,
// Há um criador básico notesReducer()e um addNoteText()criador de ação definidos no editor de código. Conclua o corpo da addNoteText()função para que ela retorne um actionobjeto. O objeto deve incluir uma typepropriedade com um valor de ADD_NOTEe também uma textpropriedade definida para os notedados que são passados ​​para o criador da ação. Ao chamar o criador da ação, você passará informações específicas da nota que você pode acessar para o objeto.

// Em seguida, termine de escrever a switchdeclaração no notesReducer(). Você precisa adicionar um caso que lida com as addNoteText()ações. Este caso deve ser acionado sempre que houver uma ação do tipo ADD_NOTEe deve retornar a textpropriedade na entrada actioncomo nova state.

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
    return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
    return {
      type: ADD_NOTE,
      text: note
    }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());