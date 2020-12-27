
var settings = require('../db/settings')


var CoursesSchema = settings.mongoose.Schema(
    {
            title: {type:String, required:[true,'title is require']},
            triner_name: {type:String, required:true},
            experience: {type:String, required:true},
            expert_in: String,
            city: String,
            state: String,
            rating: {type: Number, required:true, min:1, max:5},
            languagesKnown : Number,
            available: String,
            Duration: String
    },
);

// Export the model
exports.Courses = settings.mongoose.model('courses', CoursesSchema)