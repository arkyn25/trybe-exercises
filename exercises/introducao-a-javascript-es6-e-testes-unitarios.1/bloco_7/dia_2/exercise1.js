const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const address = 'address';
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment
 
  console.log(`Ola, ${deliveryPerson} entrega para: ${customerName} tel: ${customerPhone} R: ${street} n: ${number} AP: ${apartment}`)
  
}

customerInfo(order);



const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva'
  const drinks = order.order.drinks.coke.type
  const newTotal = order.payment.total = 50
  const newPizzas = {
    mussarela: 15,
    calabresa: 20
  }
  const newPizza = Object.keys(newPizzas)
  console.log(`Ola ${newName}, o total do seu pedido  de ${newPizza} e ${drinks} eh de: ${newTotal},00`)
}

orderModifier(order);