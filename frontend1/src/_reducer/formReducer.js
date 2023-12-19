import {
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
  FORM_LIST_FAILURE,
} from '../_action/formActions';

const initialState = {
  formFields: [],
  forms: [],
  data: null,
  loading: false,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FORM_FIELD':
      return {
        ...state,
        formFields: [...state.formFields, action.payload],
      };
    case 'REMOVE_FORM_FIELD':
      return {
        ...state,
        formFields: state.formFields.filter((field) => field.id !== action.payload),
      };
    case 'CREATE_FORM':
      return {
        ...state,
        forms: [...state.forms, action.payload],
      };
    case 'UPDATE_FORM':
      return {
        ...state,
        forms: state.forms.map((form) =>
          form.id === action.payload.id ? { ...form, ...action.payload } : form
        ),
      };
    case 'DELETE_FORM':
      return {
        ...state,
        forms: state.forms.filter((form) => form.id !== action.payload),
      };
    case 'FORM_LIST_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
    case 'FORM_LIST_SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
    case 'FORM_LIST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    
      default:
      return state;
  }
};

export default formReducer;
