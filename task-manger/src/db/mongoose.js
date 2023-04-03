const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://192.168.0.16:27017/task-manager-api', {
    useNewUrlParser: true,
    // useCreateIndex: true
})


// const me = new user({
//     name: ' Mili ',
//     email: 'sovanvathanayean@gmail.com',
//     password: ' password123'
// })

// me.save().then((result) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })








// const user = mongoose.model('user', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new user({
//     name: 'vathana',
//     age: 19
// })

// me.save().then((result) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const task = mongoose.model('Task', {
//     decription: {
//         type: String,
//         trim: true,
//         required: true,
//     }, 
//     completed: {
//         type: Boolean,
//         default: false
//     }

// })

// const tasks = new task({
//     // decription: 'here is the new way to input in the database',
//     decription: "I'm so lazy"
    
// })

