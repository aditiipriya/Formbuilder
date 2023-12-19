const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true,
  },
  fields: [{
    title: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      required: true,
    },
    placeholder:{
      type: String,
    }
    //[{title:"Email",fieldType:"email"}]
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});
const Form = mongoose.model("Form", FormSchema);

module.exports = Form;