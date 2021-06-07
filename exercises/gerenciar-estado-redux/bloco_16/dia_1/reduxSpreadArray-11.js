// 11 - Utilizando o spread operator como ferramenta para manter a imutabilidade do state,

// Uma solução de ES6 para ajudar a impor a imutabilidade estado em Redux é o operador de propagação: .... O operador de espalhamento tem uma variedade de aplicações, uma das quais é bem adequada para o desafio anterior de produzir uma nova matriz a partir de uma matriz existente. Esta é uma sintaxe relativamente nova, mas comumente usada. Por exemplo, se você tiver uma matriz myArraye escrever:

// let newArray = [...myArray];
// newArrayagora é um clone de myArray. Ambas as matrizes ainda existem separadamente na memória. Se você realizar uma mutação como newArray.push(5), myArraynão muda. O ...efetivamente espalha os valores em myArrayuma nova matriz. Para clonar uma matriz, mas adicionar valores adicionais na nova matriz, você pode escrever [...myArray, 'new value']. Isso retornaria uma nova matriz composta dos valores de myArraye a string new valuecomo o último valor. A sintaxe de propagação pode ser usada várias vezes em uma composição de array como esta, mas é importante observar que ela apenas faz uma cópia superficial do array. Ou seja, ele fornece apenas operações de array imutáveis ​​para arrays unidimensionais.

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let arr = [...state, action.todo]
      return arr
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);