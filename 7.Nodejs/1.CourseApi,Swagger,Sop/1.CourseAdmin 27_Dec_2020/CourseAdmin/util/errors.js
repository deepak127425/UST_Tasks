
exports.errors = {

    UNKNOWN_ERROR : {
        code:5000,
        text:"Unknown error !!!",
        hints:["Please contact development team wit information on 'how to reproduce this error'. Thank you for your help and support."],
        info:"http://developer.acme.com/unknownerror"
    },

    PACKAGE_ALREADY_EXISTS :{
        code:6000,
        text:"Vacation package with the provided 'title' already exist",
        hints:["Please use PUT for update instead of POST"],
        info:"http://developer.acme.com/errors#6000"
    },


    MISSING_PACKAGE_TITLE : {
        code:7001,
        text:"Required field vacation 'title' is missing",
        hints:["Please check that user has provided the non null value for 'title'"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    MISSING_PACKAGE_TRINER_NAME :  {
        code:7002,
        text:"Required field vacation 'triner_name' is missing",
        hints:["Please check that user has provided the non null value for triner_name"],
        info:"http://developer.acme.com/error#RequiredFields"
    }  ,
    MISSING_PACKAGE_RATING : 
    {
        code:7003,
        text:"Required field vacation 'rating' is missing",
        hints:["Please check that user has provided a number (between 1 & 5)"],
        info:"http://developer.acme.com/error#RequiredFields"
    },

    FORMAT_RATING : {
        code:7004,
        text:"rating MUST be a number (between 1 & 31)",
        hints:["Please check that user has provided a numeric value for 'rating'"],
        info:"http://developer.acme.com/error#RequiredFields"
    }
}


exports.create = function(message,httpMethod,endpointInformation,errorList,receivedPayload){
    return    {
    
        text:message,
        timestamp:new Date(),
        method:httpMethod,
        endpoint:endpointInformation,
        errors : errorList,
        payload: receivedPayload
    }
}


exports.kinds = {
    REQUIRED:"required",
    NOT_VALID:"notvalid",
    NUMBER_ERROR:"Number",
    MIN_ERROR:"min",
    MAX_ERROR:"max",
}

