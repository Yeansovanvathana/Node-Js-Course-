require('../src/db/mongoose')
const task = require('../src/model/tasks')
// const task = require('../src/model/tasks')
const tasks = require('../src/model/tasks')

// tasks.findByIdAndDelete('61b9751b2fa8838f018aa184').then((task) => {
//     console.log(task)
//     return tasks.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const FindIdAndDelete = async(id, completed) => {
    const del = await tasks.findByIdAndDelete(id)
    const count = await tasks.countDocuments(completed)
    return count
}

FindIdAndDelete('61b9b64bf79f73d4e64db4cf', {completed: false}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})