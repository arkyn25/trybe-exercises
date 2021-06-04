// 9 - Criando um contador com Redux
// Nesta lição, você implementará um contador simples com Redux do zero. O básico é fornecido no editor de código, mas você terá que preencher os detalhes! Use os nomes que são fornecidos e definir incActione decActionação criadores, os counterReducer(), INCREMENTe DECREMENTtipos de ação, e finalmente o Redux store. Assim que terminar, você poderá despachar INCREMENTou DECREMENTações para aumentar ou diminuir o estado mantido no store. Boa sorte construindo seu primeiro aplicativo Redux!

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
    return state + 1

    case DECREMENT:
    return state -1

    default:
    return state
  }
}

const incAction = () => {
  return { type: INCREMENT}
}

const decAction = () => {
  return { type: DECREMENT}
}

const store = Redux.createStore(counterReducer)