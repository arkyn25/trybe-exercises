// 6 - Registrando um listener para no store
// Outro método ao qual você tem acesso no storeobjeto Redux é store.subscribe(). Isso permite que você inscreva funções de ouvinte na loja, que são chamadas sempre que uma ação é despachada na loja.
// Escreva uma função de retorno de chamada que aumente a variável global countsempre que o armazenamento receber uma ação e passe essa função para o store.subscribe()método. Você verá que store.dispatch()é chamado três vezes seguidas, cada vez passando diretamente um objeto de ação. Observe a saída do console entre os despachos de ação para ver as atualizações ocorrendo.

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {
  count = store.getState()
})
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);