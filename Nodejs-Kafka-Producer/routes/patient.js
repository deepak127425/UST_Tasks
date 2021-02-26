const express = require('express')
const router = express.Router()
const Patient = require('../model/tbf0_patient')



var apiErrors = require('../routes/error/error')
var apiMessages = require('../routes/error/message')

const kafka = require('kafka-node');

router.get('/pharmacy/patient/ping', async(req,res) => {
    try{
           const patient = await Patient.find()
           res.json(patient)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/pharmacy/patient/ping/:patientId', async(req,res) => {
    try{
           const patient = await Patient.find({"patientId": req.params.patientId})
           res.json(patient)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post("/pharmacy/patient",function(req,res){   
     
    const patient = new Patient(req.body)
    patient.save(patient, function(err,data){   
        if (err) {
            var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", "/v1/pharmacy/patient", err,{});
            res.setHeader('content-type', 'application/json')
            res.status(400).send(userError)
         console.log("error in post")
         } else {
             res.send({data:"Record has been Inserted..!!"})
         }
    });
})  


router.post('/pharmacy/patient/update', function (req, res) {
    let kclient = new kafka.KafkaClient({kafkaHost : 'localhost:9092'});
    let Producer = kafka.Producer;
    let KeyedMessage = kafka.KeyedMessage;
    km = new KeyedMessage(req.body.patientId, JSON.stringify(req.body));
    let producer = new Producer(kclient);
    var payloads = [
        { topic: 'dev-customer', messages: km, partition: 0 }
    ];

    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }

        });
    });

    producer.on('error', function (err) {
        // err
    })

    res.status(200);
    res.type('json'); 
    res.send({message : 'update sent successfully.'});
});


router.post('/pharmacy/patient/update/:id', async (req, res) => {
    try {
     var patient = new Patient(req.body);
  
      let query = { _id: req.params.id }
  
      const update = await Patient.update(query, patient);
      if (update) {
        req.flash('success', 'Patient Updated');
        res.redirect('/');
      } return;
  
    } catch (e) {
      res.send(e);
    }
  
  });


module.exports = router

var processMongooseErrors = function (message, method, endpoint, err,payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError'){
        errorList = processValidationErrors(err)
    } else if(err.code == 11000){
        // it could be database error - 11000 is for duplicate key
        errorList.push(apiErrors.errors.PATIENTID_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}

var processValidationErrors = function (err) {
    var errorList = []


    if (err.errors.patientId) {
        if (err.errors.patientId.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PATIENTID)
        }
    }


    if (err.errors.firstName) {
        if (err.errors.firstName.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors. MISSING_PACKAGE_FIRST_NAME)
        }
    }

    return errorList;
}

