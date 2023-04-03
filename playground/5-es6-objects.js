//object property shorthand

const name = 'vathana'
const Userage = 17

const user = {
    name,
    age: Userage,
    location: 'New York'
}

// console.log(user)

const product = {
    lebel: 'note book',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const {lebel:lebelProduct, price, rating = 5} = product
// console.log(lebelProduct)
// console.log(price)
// console.log(rating)

// const transactio = (type, {price, stock}) => {
//     console.log(type, price)
// }
const transactio = (type, {price, stock} = {}) => {
    console.log(type, price)
}

transactio('order')