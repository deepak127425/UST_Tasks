
var settings = require('../db/settings')


var CoursesSchema = settings.mongoose.Schema(
    {
        title: {type:String, required:[true,'title is require']},
		triner_name: {type:String, required:true},
		created: Number,
		modified: Number,
		experience: {type:String, required:true},
		expert_in: String,
		city: String,
		state: String,
		countryCode: String,
		emp_id: Number,
		rating: {type: Number, required:true, min:1, max:5},
		confidenceRating: Number,
		languagesKnown : Number,
		available: String,
		location: {
					latitude: Number,
					longitude: Number
		},
		studentsTrained: Number,
		PriceForCourse: Number,
		Duration: String,
    },
);

// Export the model
exports.Courses = settings.mongoose.model('courses', CoursesSchema)