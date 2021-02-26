const fs=require('fs');
// eslint-disable-next-line no-undef
const contents = fs.readFileSync(__dirname + '/error.json');
const errorMaster = JSON.parse(contents);

const HttpStatusCodes = { OK:200, INVALIDREQ:400, UNAUTHORIZED:401,NOTFOUND: 404,INVALIDVERB:405, GENERICERROR:500,BACKENDERROR:503 };

function getError(errorCode){
    
    for(var error of errorMaster.errors){
        if (error.status == errorCode){
            var clonedError = JSON.parse(JSON.stringify(error))
            delete clonedError.status;
            return clonedError;
        }
                   
    }
}
//...................................
exports.errors = {

    UNKNOWN_ERROR : {
        code:5000,
        text:"Unknown error !!!",
        hints:["Please contact development team wit information on 'how to reproduce this error'. Thank you for your help and support."],
        info:"http://developer.acme.com/unknownerror"
    },

    PATIENTID_ALREADY_EXISTS :{
        code:6000,
        text:"Patient with the provided 'id' already exist",
        hints:["Please use PUT for update instead of POST"],
        info:"http://developer.acme.com/errors#6000"
    },


    MISSING_PATIENTID : {
        code:7001,
        text:"Required field patientid is missing",
        hints:["Please check that user has provided the non null value for 'patientid'"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    MISSING_PACKAGE_FIRST_NAME :  {
        code:7002,
        text:"Required field firstname is missing",
        hints:["Please check that user has provided the non null value for firstname"],
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
    REQUIRED:"required"
}
//...................................
module.exports.getError = getError;
module.exports.HttpStatusCodes = HttpStatusCodes;

