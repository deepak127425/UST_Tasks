
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

// // UPDATE 
// exports.update = function (criteria, doc, callback) {
//     model.Courses.updateMany(criteria, doc, function (err, data) {
//         callback(err, data)

//     })
// }

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