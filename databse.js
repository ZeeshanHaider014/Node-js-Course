const mongoose = require('mongoose');

//Define Mongodb link
const MongodbUrl = 'mongodb://localhost:27017/Myroom'
//connect to server
mongoose.connect(MongodbUrl)
//Get default connection

const db = mongoose.connection;

//Event listner
db.on('connected', ()=>{
    console.log('connected to the server')
})

db.on('error', (err)=>{
    console.error('Mongodb has error', err)
})

db.on('disconnected', ()=>{
    console.log('disconnected to the server')
})
//export db to make cnnectio
module.exports = db
