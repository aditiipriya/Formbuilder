const Form = require("../models/formModel");
const mongoose = require("mongoose")
module.exports = {
  getAllForms: ()=>{
    return Form.find({})
  },

  createForm: (params) => {
    return Form.create(params)
  },

  updateForm: (params) => {
    return Form.findOneAndUpdate({ _id: params.formId }, params, { new: true }).lean()
  },

  viewForm: (params) => {
    return Form.findOne({ _id: params.formId })
  },

  deleteForm: (params) => {
    console.log(params,"qqqqwwwwwwwwwwwwww")
    return Form.deleteOne(
      { _id: params.formId }
    );
  },

  getFormById: (params) => {
    return Form.findOne({ _id: params.formId })
  }
};
