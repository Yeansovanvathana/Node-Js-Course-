const express = require('express')
const users = require('../src/model/users')
const router = new express.Router

router.get('/test', (req, res) => {
    res.send('Hello from my new file')
})

router.post('/users', async(req, res) => {

    const user = new users(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get('/users', async(req, res) => {
    
    try {
        const user = await users.find({})
        res.send(user)
    }catch(e) {
        res.status(500).send(e)
    }
    
    // users.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.get('/users/:id', async(req, res) => {
    // console.log(req.params)
    const _id = req.params.id
    
    try{
        const user = await users.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e) {
        res.status(500).send(e)
    }
  

    // users.findById(_id).then((user) => {
    //     if(!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.patch('/users/:id', async(req, res) => {

    const update = Object.keys(req.body)
    const allowUpdate = ['name', 'email', 'age', 'password']
    const isValidOperation = update.every((updates) => allowUpdate.includes(updates))
    if (!isValidOperation) {
        return res.status(400).send({ error: "invalid update"})
    }

    try{

        const user = await users.findById(req.params.id)
        update.forEach((updates) => user[updates] = req.body[updates]) 
        await user.save()
        // const user = await users.findByIdAndUpdate(req.params.id, req.body, { new: true , runValidators: true})
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/users/:id', async(req, res) => {
    try{
        const user = await users.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).send()
    }
    res.send(user)
    }catch(e) {
        res.status(500).send(e)
    }
})


module.exports = router