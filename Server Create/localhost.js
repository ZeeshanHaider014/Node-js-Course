const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('My name us zeeshan......  Wellcome to Gilgit Baltistan')
})

app.get('/Balghar', (req, res)=>{
    var info = {
        name : 'ZEESHAN HAIDER BALGHARI ',
        FATHER_NAME : 'FIDA ALI',
        Age : 21,
        Occupation : 'Student'

    }
    res.send(info)
})
app.get('/Village', (req, res)=>{
    res.send('My hometown is Khorakha from where my family lived ')
})
app.get('/home', (req, res)=>{
    res.send('My home is located ata start of our town ')
})
app.get('/info', (req, res)=>{
    res.send('My name Zeeshan s/o Fida Ali ')
})

app.listen(3000, ()=>{
    console.log('Server is active')
})