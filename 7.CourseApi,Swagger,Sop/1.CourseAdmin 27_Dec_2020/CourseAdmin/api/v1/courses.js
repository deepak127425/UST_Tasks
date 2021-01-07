
var RESOURCE_NAME = 'courses';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 

// Setup the courses db
var db = require('../../db/courses')
var apiErrors = require('../../util/errors')
var apiMessages = require('../../util/messages')
var MAX_AGE = 15;

module.exports = function(router){
    'use strict';

    router.route(URI).get(function(req, res,next){
        console.log("GET Courses")
        
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);

        //1. fields
        var fields ={}
        if(req.query && req.query.fields !== undefined){
           fields =  createFields(req.query.fields)
        }

            // paginations
            var pagination = {limit:0, offset:0}
            if(req.query && req.query.limit !== undefined){
                // checks should be made that limit is a number
                pagination.limit = req.query.limit
            }
            if(req.query && req.query.offset !== undefined){
                // checks should be made that limit is a number
                pagination.offset = req.query.offset
            }

        //2. Setup options
        var options = {fields:fields, pagination:pagination}
        console.log(options)

        //3. execute the query
        var criteria = {}
        db.select(criteria, options, function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved course = %d",docs.length)
                res.send(docs)
            }
        });
    });

    // CREATE new Course packages
    router.route(URI).post(function (req, res, next) {
        console.log("POST  Courses")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        //1. Get the data
        var doc = req.body;

        //2. Call the insert method
        db.save(doc, function (err, saved) {
            if (err) {
               var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", URI, err,{});
               res.setHeader('content-type', 'application/json')
               res.status(400).send(userError)
            console.log("error in post")
            } else {
                res.send(saved)
            }
        });
    });

    router.route(URI).put(function(req,res,next){
        console.log("update data")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        var criteria = {_id:'5fe9e28e2a7e4b2ca4aee0d4'}
        var doc = req.body;
        db.update(criteria,doc,function(err,updated){
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("updated courses = %d",updated.length)
                res.send(updated)
            }
        });
    });

    router.route(URI).delete(function(req,res,next){
        console.log("Remove data")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        var criteria = {title:"HTML/CSS"}
        db.delete(criteria,function(err,deleted){
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("Deleted courses = %d",deleted.length)
                res.send(deleted)
            }
        });
    });
}


var processMongooseErrors = function (message, method, endpoint, err,payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError'){
        errorList = processValidationErrors(err)
    } else if(err.code == 11000){
        // it could be database error - 11000 is for duplicate key
        errorList.push(apiErrors.errors.PACKAGE_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}

var processValidationErrors = function (err) {
    var errorList = []

    if (err.errors.rating) {
        if (err.errors.rating.kind === apiErrors.kinds.MIN_ERROR 
        || err.errors.rating.kind  === apiErrors.kinds.MAX_ERROR 
        || err.errors.rating.kind === apiErrors.kinds.NUMBER_ERROR ) {
            errorList.push(apiErrors.errors.FORMAT_RATING)
        }
    }

    if (err.errors.title) {
        if (err.errors.title.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_TITLE)
        }
    }


    if (err.errors.triner_name) {
        if (err.errors.triner_name.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_TRINER_NAME)
        }
    }

    if (err.errors.rating) {
        if (err.errors.rating.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors. MISSING_PACKAGE_RATING)
        }
    }


    return errorList;
}

function createFields(str){
    var arr = str.split(',')
    str = '{'
    for(var i=0; i < arr.length; i++){
        str += '\"' + arr[i] + '\":1'
        if(i < arr.length - 1) str += ","
    }
    str += '}'
    return JSON.parse(str)
}