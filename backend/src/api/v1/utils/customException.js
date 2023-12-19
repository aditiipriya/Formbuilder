
const Exception = require("./exceptionModel");
const constants = require("./constant");

module.exports = {
    intrnlSrvrErr:  (err) => {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    getCustomErrorException:  (errMsg, error)  => {
        return new Exception(2, errMsg, error)
    },
    FORM_NOT_FOUND:() => {
        return new Exception(3, constants.MESSAGES.FORM_NOT_FOUND)
    }
};
