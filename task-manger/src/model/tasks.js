const mongoose = require('mongoose')

const task = mongoose.model('Task', {
    decription: {
        type: String,
        trim: true,
        required: true,
    }, 
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = task
