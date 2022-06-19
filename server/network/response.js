const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invald format',
    '500': 'Internal error',
}

exports.succes = function(req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;

    if (!status) {
        status = 200;
    }

    if (!message) {
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function(req, res, message, status, details) {
    let errorCode = status;
    let errorMessage = message;

    if(!status) {
        status = 500;
    }

    if(!message) {
        errorMessage = statusMessage[status];
    }

    console.error('[response error] ' + details)

    res.status(errorCode).send({
        error: errorMessage,
        body: ''
    });
}