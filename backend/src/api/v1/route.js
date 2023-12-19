const express = require("express");
const router = express.Router();
const responseHandler = require('../response/responseHandler');

const fomRoute= require("../v1/routes/formRoute");

module.exports = function (app) {
  app.use('/api', fomRoute);
  app.use(responseHandler.handleError)
};