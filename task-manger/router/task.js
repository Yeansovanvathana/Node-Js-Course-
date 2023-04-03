const express = require('express')
const router = new express.Router
const tasks = require('../src/model/tasks')

router.post('/tasks', async(req, res) => {
    const task = new tasks(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    }catch(e) {
        res.status(500).send(e)
    }
   

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

})

router.get('/tasks', async(req, res) => {

    
    try{
        const task = await tasks.find({})
        res.send(task)
    }catch(e) {
        res.status(500).send(e)
    }
    // task.find({}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id

    try{
        const task = await tasks.findById(_id)
        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e) {
        res.status(500).send(e)
    }


    // task.findById(_id).then((task) => {
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.patch('/tasks/:id', async(req, res) => {
    const update = Object.keys(req.body)
    const allowUpdate = ['decription', 'completed']
    const isvalidUpdate = update.every((updates) => allowUpdate.includes(updates))
    if(!isvalidUpdate) {
        return res.status(400).send({ error: 'invalid update'})
    }

    try{

        const task = await tasks.findById(req.params.id)
        update.forEach((updates) => task[updates] = req.body[updates])
        await task.save()

        // const task = await tasks.findByIdAndUpdate(req.params.id, req.body, { new: true, isValidOperation: true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async(req, res) => {
    try{
        const task = await tasks.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e) {
        res.status(500).send(e)
    }
})


module.exports = router