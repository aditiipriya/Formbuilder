const formRouter = require("express").Router();
const formController = require("../controllers/formController");
const resHndlr=require('../../response/responseHandler');
const validators =require('../validators/validateForm');


formRouter.route("/form").get([ ], (req, res) => {
  formController.getAllForms({})
  .then( (result)=> { resHndlr.sendSuccess(res, result, req); })
  .catch( (err)=> { resHndlr.sendError(res, err, req); });
});

formRouter.route("/form/create").post([ validators.validateCreateForm ], (req, res) => {
  formController.createForm({ ...req.body })
  .then( (result)=> { resHndlr.sendSuccess(res, result, req); })
  .catch( (err)=> { resHndlr.sendError(res, err, req); });
});


formRouter.route("/form/edit/:formId").patch([], (req, res) =>{
  formController.updateForm({ ...req.body ,...req.params})
    .then( (result) => {
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err)=> {
      resHndlr.sendError(res, err, req);
    });
}); 

formRouter.route("/form/:formId").get([],  (req, res) =>{
  formController.viewForm({ ...req.params })
    .then( (result)=> {
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err)=> {
      resHndlr.sendError(res, err, req);
    });
});

formRouter.route("/form/delete/:formId").delete([], (req, res)=> {
  console.log(req.params,"qqqqwwwwwwwwwwwwww",req.query)

  formController.deleteForm({...req.params}).then( (result) =>{
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err) =>{
      resHndlr.sendError(res, err, req);
    });
});


module.exports = formRouter;

