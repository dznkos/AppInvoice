export const invoice = {
  id: 10,
  name: 'Componentes PC',
  client: {
    name: 'Pepe',
    lastName: 'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'One Street',
      number: 12
    }
  },
  company: {
    name: 'New Egg',
    fiscalNumber: 1234567
  },
  items: [
    {
      id: 1,
      product: 'Intel i7 9000',
      price: 499,
      quantity: 2
    },
    {
      id: 2,
      product: 'Ryzen 7 5000',
      price: 699,
      quantity: 1
    },
    {
      id: 3,
      product: 'Ryzen 9 6000',
      price: 1299,
      quantity: 1
    },
  ]
}

