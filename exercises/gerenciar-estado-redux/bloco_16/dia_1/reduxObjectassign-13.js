// 13 - Trabalhando com Object.assign,
// const newObject = Object.assign({}, obj1, obj2);
// Isso é criado newObjectcomo um novo object, que contém as propriedades que existem atualmente em obj1e obj2.

// O estado e as ações Redux foram modificados para lidar com um objectpara o state. Edite o código para retornar um novo stateobjeto para ações com tipo ONLINE, que define a statuspropriedade para a string online. Tente usar Object.assign()para completar o desafio.

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
       
      return Object.assign({}, state, { status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);