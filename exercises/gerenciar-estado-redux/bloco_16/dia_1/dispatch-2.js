// 2 - Enviando uma action para um reducer, 
// Despachar um Evento de AçãoPassado
// dispatchmétodo é o que você usa para despachar ações para a loja Redux. Chamar store.dispatch()e passar o valor retornado de um criador de ação envia uma ação de volta para a loja.

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())