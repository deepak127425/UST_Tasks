
var model = require('../models/courses')
var settings = require('../db/settings')

// CREATE one
exports.save = function (data, callback) {

    new model.Courses(data).save(function (err, inserted) {
        callback(err, inserted)

    })
}

// CREATE multiple 
exports.saveMany = function (rows, callback) {

    model.Courses.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}

// UPDATE 
exports.update = function (criteria, doc, callback) {
    model.Courses.updateMany(criteria, doc, function (err, data) {
        callback(err, data)

    })
}

// Remove
exports.delete = function (criteria, callback) {
    model.Courses.deleteOne(criteria, function(err,data){
        callback(err,data)
    })
}


// // RETRIEVE 
// exports.select = function (criteria, callback) {
//     model.Courses.find(criteria, function (err, data) {
//         callback(err, data)
//     })
// }



exports.select = function (criteria,options, callback) {
    model.Courses.find(criteria, function (err, data) {
        callback(err, data)
    }).select(options.fields)
}

exports.select = function (criteria,options, callback) {

    // Local variable for capturing limit & offset
    var lim = 0
    var off = 0
    if(options.pagination !== undefined){
        if(options.pagination.limit !== undefined)  lim = parseInt(options.pagination.limit)
        if(options.pagination.offset !== undefined)  off = parseInt(options.pagination.offset)
    }

    model.Courses.find(criteria, function (err, data) {
        callback(err, data)
    }).select(options.fields).limit(lim).skip(off)
}