const mongoose = require('mongoose')

exports.getMongoConnection = () => {
    
const url = 'mongodb://localhost/PatientTestApp'

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

return con;
};