// 4 -Criando um reducer que aceita actions de tipos distintos
// Use uma instrução Switch para lidar com várias ações.
// Preencha a reducerfunção para lidar com várias ações de autenticação. Use uma switchinstrução JavaScript no reducerpara responder a diferentes eventos de ação. Este é um padrão padrão na escrita de redutores Redux. A instrução switch deve alternar action.typee retornar o estado de autenticação apropriado.

// Nota: neste ponto, não se preocupe com a imutabilidade do estado, uma vez que é pequeno e simples neste exemplo. Para cada ação, você pode retornar um novo objeto - por exemplo {authenticated: true},. Além disso, não se esqueça de escrever um defaultcaso em sua instrução switch que retorne o atual state. Isso é importante porque, uma vez que seu aplicativo tem vários redutores, todos eles são executados sempre que um despacho de ação é feito, mesmo quando a ação não está relacionada a esse redutor. Nesse caso, você deseja certificar-se de que retornou a corrente state.

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
    switch(action.type) {
      case 'LOGIN':
      return {
        authenticated: true
      }
      case 'LOGOUT':
      return {
        authenticated: false
      }
      default:
      return defaultState
    }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};