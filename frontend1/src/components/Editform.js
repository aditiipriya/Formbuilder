// UpdateForm.js
import React,{ useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {
    updateForm,
} from '../_action/formActions';
  
const UpdateForm = () => {
    const Form = ({    
        updateForm,
        formFields
      }) => {
        const [formLabel, setFormLabel] = useState('');
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

      
        const handleUpdateForm = (formId) => {
          const updatedForm = {
            id: formId,
            label: formLabel,
            fields: [...formFields],
          };
      
          updateForm(updatedForm);
          setFormLabel('');
        };
           
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(updateForm())
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
            <h2>Update form </h2>
            <hr></hr>      
            <div className="formSection">
            {console.log(data,"data.......")}
            <ul style={{ listStyleType: 'none' }}>
              {data ? data.map((form) => (
                <li key={form.formName} >
                   {form.formName} 
                   <div className='box'>

                   </div>
      
                </li>
              )): <p>Form not found !</p>}
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
                <button onClick={() => handleUpdateForm(form.id)}>Da Form</button>
              </div>
            ))} */}
          </div>
        );
      };
};

export default UpdateForm;


  
  
  
