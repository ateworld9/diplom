const STATUS_CODES = {
    UPGRADE: 101,
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UN_AUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    CONFLICT: 409,
    I_AM_TEAPOT: 418,
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,

    //add new code from MDN if it need
};

class AppError extends Error {
    constructor(statusCode, message, errors = []) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = statusCode;
        this.errors = errors;
        // Error.captureStackTrace(this, undefined);
    }

    static NoContent(message = 'No Content', errors = []) {
        return new AppError(STATUS_CODES['BAD_REQUEST'], message, errors);
    }

    static BadRequest(message = 'Bad Request', errors = []) {
        return new AppError(STATUS_CODES['BAD_REQUEST'], message, errors);
    }
    static UnAuthorized(message = 'Un Authorized', errors = []) {
        return new AppError(STATUS_CODES['UN_AUTHORIZED'], message, errors);
    }
    static Forbidden(message = 'Forbidden', errors = []) {
        return new AppError(STATUS_CODES['FORBIDDEN'], message, errors);
    }

    static NotFound(message = 'Not Found', errors = []) {
        return new AppError(STATUS_CODES['NOT_FOUND'], message, errors);
    }

    static Conflict(message = 'Conflict', errors = []) {
        return new AppError(STATUS_CODES['NOT_FOUND'], message, errors);
    }

    static InternalError(message = 'Internal Error', errors = []) {
        return new AppError(STATUS_CODES['INTERNAL_ERROR'], message, errors);
    }
}

//api Specific Errors
// TODO: ValidationError
// TODO: DatabaseError
export { AppError, STATUS_CODES };
