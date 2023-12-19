const STATUS_CODE = {
    ERROR: 400,
    SUCCESS: 200,
};

const MESSAGES = {
    KEY_CANT_EMPTY: "{{key}} cannot be empty",
    INTERNAL_SERVER_ERROR: "Please try after some time.",
    VALIDATION_ERROR: "Validation error.",
    FORM_NOT_FOUND:"Form not found",
};

module.exports = Object.freeze({
    STATUS_CODE: STATUS_CODE,
    MESSAGES: MESSAGES,
});
