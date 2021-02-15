const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/PatientDetails'
const patientRouter = require('./routes/v1')
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

app.use('/v1',patientRouter)

app.listen(9090, () => {
    console.log('Server started')
})