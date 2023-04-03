//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObejectID = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')

const connectURL = 'mongodb://192.168.0.16:27017'
const database = 'task-manager'

const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)


MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        console.log('Unable to connect to database')
    }

    const db = client.db(database)

   
    ///ADD..........................................

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'vathanaka',
    //     age: 18
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    // }) 
    // db.collection('users').insertMany([
    //     {
    //         name: 'leng',
    //         age: 19
    //     },
    //     {
    //         name: 'Mey',
    //         age: 19
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insertMany users')
    //         }
            
    //         console.log(result)
    //     })   

    // db.collection('description').insertMany([
    //     {
    //         description: 'I have work on 1 lesson',
    //         completed: true
    //     }, {
    //         description: 'I do the work on what I have set',
    //         completed: false
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert the document')
    //         }

    //         console.log(result)
    //     })

    ///READ................................................

    // db.collection('users').findOne({ _id: new ObjectId('61b1b4413a7d5a966966057d') }, (error, user) => {
    //     if (error) {
    //         return console.log('Uable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age:19 }).toArray((error, user) => {
    //     console.log(user)
    // })
    // db.collection('description').findOne({ _id: new ObjectId("61b1b5d724863a9584fc347c")}, (error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('description').find({completed:false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

   //UPDATE.......................................

    // db.collection('users').updateOne({
    //     _id: new ObjectId('61b1aedc4846591ca6cefdc7')},
    //     //  $set: {
    //     // name: 'Odvito'
    //     // }
    //     {
    //         $inc: {
    //             age: 1
    //         }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('description').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

     //DELETE........................................

    // db.collection('users').deleteMany({
    //     age: 18
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     name: 'leng'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
}) 