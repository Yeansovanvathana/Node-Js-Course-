require('../src/db/mongoose')

const user = require('../src/model/users')


// user.findByIdAndUpdate('61b369ebc424d9336d82a829', {age: 18}).then((users) => {
//     console.log(users)
//     return user.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const UpdateAgeAndCount = async (id, age) => {
    const users = await user.findByIdAndUpdate(id, {age})
    const count = await user.countDocuments({age})
    return count
}

UpdateAgeAndCount('61b6eb99c892a1dbe079e4a1', 19).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})