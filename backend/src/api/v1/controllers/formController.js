const formService = require("../services/formService");
const customException = require("../utils/customException");

module.exports = {

  getAllForms: async ()=>{
    const data = await formService.getAllForms();
    let result = {
      message: "Form Listed successfully !!",
      count: data.length,
      data: data,
    };
    return result;
  },

  createForm: async (params) => {
    const data = await formService.createForm(params);
    let result = {
      message: "Form Created successfully !!",
      data: data
    };
    return result;
  },

  updateForm: async (params) => {
    let formExist = await formService.getFormById(params)
    if (!formExist) {
      throw customException.FORM_NOT_FOUND();
    }
    return formService.updateForm(params)
      .then((data) => {
        if (data)
          return { message: "Form updated !!", data: data };
        else
          throw customException.FORM_NOT_FOUND();
      });
  },

  viewForm: async (params) => {
    return await formService.viewForm(params)
      .then((data) => {
        if (data)
          return { message: "Form fetched !!", data: data };
        else
          throw customException.FORM_NOT_FOUND();
      });
  },

  deleteForm: async (params) => {
    let formExist = await formService.getFormById(params)
    if (!formExist) {
      throw customException.FORM_NOT_FOUND();
    }
    return await formService.deleteForm(params)
      .then((data) => {
        if (data)
          return { message: "Form deleted !!" };
        else
          throw customException.FORM_NOT_FOUND();
      });
  },


};
