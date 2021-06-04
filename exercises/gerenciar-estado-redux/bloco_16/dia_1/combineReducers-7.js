// 7 - Combinando múltiplos reducers
// Para nos permitir combinar vários redutores, Redux fornece o combineReducers()método. Este método aceita um objeto como um argumento no qual você define propriedades que associam teclas a funções de redutor específicas. O nome que você der às chaves será usado por Redux como o nome para a parte de estado associada.

// Normalmente, é uma boa prática criar um redutor para cada parte do estado do aplicativo quando eles são distintos ou exclusivos de alguma forma. Por exemplo, em um aplicativo de anotações com autenticação do usuário, um redutor pode lidar com a autenticação enquanto outro lida com o texto e as notas que o usuário está enviando. Para tal aplicação, podemos escrever o combineReducers()método como este:

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});

// Existem funções counterReducer()e authReducer()fornecidas no editor de código, juntamente com uma loja Redux. Termine de escrever a rootReducer()função usando o Redux.combineReducers()método. Atribuir counterReducera uma tecla chamada counte authReducera uma tecla chamada auth.

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here
  Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
  })


const store = Redux.createStore(rootReducer);