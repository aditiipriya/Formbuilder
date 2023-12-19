import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import '../App.css';
import {
  addFormField,
  removeFormField,
  createForm,
  updateForm,
  deleteForm,
  formList,
  viewForm
} from '../_action/formActions';

const FormBuilder = ({
  formFields,
  forms,
  addFormField,
  removeFormField,
  createForm,
  updateForm,
  deleteForm,
  viewForm
}) => {
  const [formLabel, setFormLabel] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCreateForm = () => {
    const newForm = {
      id: Date.now(),
      label: formLabel,
      fields: [...formFields],
    };

    createForm(newForm);
    setFormLabel('');
  };

  const handleUpdateForm = (formId) => {
    const updatedForm = {
      id: formId,
      label: formLabel,
      fields: [...formFields],
    };

    updateForm(updatedForm);
    setFormLabel('');
  };

  const handleDeleteForm = (formId) => {
    deleteForm(formId);
  };

  const handleViewForm = (formId) => {
    viewForm(formId);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(formList())
      .then(Response => {
        return Response.responseData.data
      }).then(result => {
        setData(result)
      }).catch(error => {
        setError(error)
      })
  }, [dispatch]);

  return (
    <div className='main-page'>
      <h2> Welcome to Form builder </h2>
      <p>This is a simple form builder .</p>
      <button className="createButton" onClick={handleCreateForm}>Create New Form</button>
      <hr></hr>
      <h3>Forms </h3>

      <div className="formSection">
      {console.log(data,"data.......")}
      <ul style={{ listStyleType: 'none' }}>
        {data ? data.map((form) => (
          <li key={form.formName} >
             {form.formName} 
             <div className='box'>
             {/* <button className="viewButton" style={{color:'green' ,backgroundColor:'white',border:'none'}} onClick={()=>handleViewForm(form._id)}>View</button> */}
             {/* <button className="editButton" style={{color:'blue' ,backgroundColor:'white',border:'none'}} onClick={()=>handleUpdateForm(form._id)}>Edit</button> */}
             <Link to="/view" style={{color:'green' ,backgroundColor:'white',border:'none', textDecoration:'none'}} onClick={()=>handleViewForm(form)} >View</Link> &nbsp;
             <Link to="/edit" style={{color:'blue' ,backgroundColor:'white',border:'none', textDecoration:'none'}} onClick={()=>handleUpdateForm(form)} >Edit</Link>
             <button className="deleteButton" style={{color:'red' ,backgroundColor:'white',border:'none'}} onClick={() => handleDeleteForm(form._id)}>Delete</button>
             </div>

          </li>
        )): <p>You have no forms created yet !</p>}
      </ul>
      </div>
      
      {/* {data && data.map((form)=>(
        <div key={form.id} />
      ))} */}
      {/* <label>
        Form Label:
        <input type="text" value={formLabel} onChange={(e) => setFormLabel(e.target.value)} />
        </label> */}
      {/* {forms.map((form) => (
        <div key={form.id}>
          <h3>{form.label}</h3>
          {form.fields.map((field) => (
            <div key={field.id}>
              <span>{field.label}</span>
              <button onClick={() => removeFormField(field.id)}>Remove</button>
            </div>
          ))}
          <button onClick={() => handleUpdateForm(form.id)}>Update Form</button>
          <button onClick={() => handleDeleteForm(form.id)}>Delete Form</button>
        </div>
      ))} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formFields: state.form.formFields,
    forms: state.form.forms,
  };
};

export default connect(mapStateToProps, {
  addFormField,
  removeFormField,
  createForm,
  updateForm,
  deleteForm,
  viewForm
})(FormBuilder);

