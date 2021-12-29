const ErrorsFatal = require('../../app/errors/ErrorsFatal');
const ErrorsLogins = require('../../app/errors/ErrorsLogin');
const ErrorsUnauthorizedAccess = require('../../app/errors/ErrorsUnauthorizedAccess');

module.exports = error => {
    if(error.originalError instanceof ErrorsLogins) {
        return new Error(error.extensions.exception.description)
    }

    if(error.originalError instanceof ErrorsUnauthorizedAccess) {
        return new Error(error.extensions.exception.description)
    }

    return new ErrorsFatal(error)
}