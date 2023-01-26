type CategoryType = {
  id: string
  title: string
  selected?: boolean
}[]

type ReceiptCardType = {
  id: string
  title: string
  imageUrl: string
  owner: string
  stars: number
  favorited?: boolean
}[]

type ReceiptType = {
  title: string
  imageOne: string
  imageTwo?: string
  imageThree?: string
  preparationTime: number
  owner: string
  ingredients: {
    quantity: number
    name: string
    type?: 'quantity' | 'weight'
  }[]
  preparationMethod: string[],
  comments?: {
    avatarUrl: string
    owner: string
    date: Date
    comment: string
  }[]
}

export const categoriesMock: CategoryType = [
  { id: '1', title: '🍹 Bebidas', selected: true },
  { id: '2', title: '🍉 Frutas', selected: true },
  { id: '3', title: '🎂 Bolos' },
  { id: '4', title: '🍦 Sovertes' },
  { id: '5', title: '🍕 Pizzas', selected: true }
]

export const receiptsMock: ReceiptCardType = [
  { id: '1', title: 'Torta de maçã', imageUrl: 'https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', owner: 'Lucas Andrade', stars: 12 },
  { id: '2', title: 'Pizza 4 queijos', imageUrl: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', owner: 'Maria Joana', stars: 21, favorited: true },
  { id: '3', title: 'X-Burguer', imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80', owner: 'José Ribeiro', stars: 17 },
  { id: '4', title: 'Pizza italiana', imageUrl: 'https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80', owner: 'Luana Silva', stars: 42 },
  { id: '5', title: 'Empada de frango', imageUrl: 'https://images.unsplash.com/photo-1591985666643-1ecc67616216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', owner: 'Marcos Lima', stars: 55, favorited: true },
  { id: '6', title: 'Bolo de limão', imageUrl: 'https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', owner: 'Lucas Andrade', stars: 4, favorited: true },
  { id: '7', title: 'Bolo de laranja', imageUrl: 'https://images.unsplash.com/photo-1569289481619-ca70735e9756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', owner: 'Igor Leite', stars: 19 },
  { id: '8', title: 'Torta de chocolate', imageUrl: 'https://images.unsplash.com/photo-1546898976-9850b9bba1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', owner: 'Lucas Andrade', stars: 32, favorited: true },
]

export const receiptMock: ReceiptType = {
  title: 'Torta de maçã',
  imageOne: 'https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  imageTwo: 'https://images.unsplash.com/photo-1506127946181-abb01a32593c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageThree: 'https://images.unsplash.com/photo-1562007908-69cf18a6da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  preparationTime: 60,
  owner: 'Lucas Andrade',
  ingredients: [
    { quantity: 3, name: 'Ovos' },
    { quantity: 1, name: 'Caixa de leite' },
    { quantity: 5, name: 'Maçãs' },
    { quantity: 4, name: 'Farinha', type: 'weight' },
  ],
  preparationMethod: [
    'Quebre os ovos em uma panela',
    'Misture com farinha e leite',
    'Corte as maçãs',
    'Coloque no forno por 1 hora',
    'Está pronta a receita!'
  ],
  comments: [
    {
      owner: 'Matheus Pereira',
      avatarUrl: 'https://github.com/MatheusSousa5068.png',
      comment: 'Que receita incrível :)',
      date: new Date
    },
    {
      owner: 'Johnner Yelcde',
      avatarUrl: 'https://github.com/Yelcde.png',
      comment: 'Receita muito boa e simples, parabéns!',
      date: new Date
    },
  ]
}