const _ = require("lodash");

const appUtils = require("../utils/appUtils");
const exceptions = require("../utils/customException");
const constant = require("../utils/constant");

let validateCreateForm = (req, res, next) => {
  let { formName, fields } = req.body;
  const errors = [];

  if (!formName) {
    errors.push({
      fieldName: "formName",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "formName"),
    });
  }
  
  if (fields.length < 1) {
    errors.push({
      fieldName: "fields",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "fields"),
    });
  }
  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

let validationError = (errors, next) => {
  if (errors && errors.length > 0) {
    return next(
      exceptions.getCustomErrorException(
        constant.MESSAGES.VALIDATION_ERROR,
        errors
      )
    );
  }
  next();
};

module.exports = {
  validateCreateForm,
};
