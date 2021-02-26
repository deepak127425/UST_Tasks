const mongoose = require('mongoose')


const patientSchema = new mongoose.Schema(

{
	patientId: {type:String, required:[true,'title is require'], unique: true},
	firstName: {type:String, required:true},
	middleInit: String,
	lastName: String,
	surnameSuffix: String,
	gender: String,
	email: String,
	dob: String,
	phoneNumberAreaCode: String,
	phoneNumber: String,
	preferredStoreNumber: Number,
	lastFilledStoreNumber: String,
	preferredPaymentMethod: String,
	previousFilledLastMile: String,
	time : { type : Date, default: Date.now },
	customerShippingAddress: {
		addressLine1: String,
		city: String,
		zipCode: String,
		state: String
	},
	profilePaymentDetails: [
	  {
		cardType: String,
        creditCard: String,
        lastFourDigits: Number,
        expiryMonth: Number,
        expiryYear: Number,
        zipCode: String,
        isDefault: Boolean
	  }
	]
})

module.exports = mongoose.model('tbf0_patient',patientSchema,'tbf0_patient')