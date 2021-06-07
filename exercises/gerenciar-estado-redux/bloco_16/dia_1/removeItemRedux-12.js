// 12 - Removendo itens de um array preservando a imutabilidade,
// Remover um item de uma matriz
// É hora de praticar a remoção de itens de uma matriz. O operador de propagação também pode ser usado aqui. Outros métodos úteis de JavaScript incluem slice()e concat().

// O redutor e o criador da ação foram modificados para remover um item de uma matriz com base no índice do item. Termine de escrever o redutor para que uma nova matriz de estado seja retornada com o item no índice específico removido.

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);