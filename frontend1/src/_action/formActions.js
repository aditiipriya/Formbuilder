import { ApiUrls } from "../ApiService";
import { ResponseFilter } from '../_helper/ResposeHandler';

const FORM_LIST_REQUEST = 'FORM_LIST_REQUEST';
const FORM_LIST_SUCCESS = 'FORM_LIST_SUCCESS';
const FORM_LIST_FAILURE = 'FORM_LIST_FAILURE';


const VIEW_FORM_REQUEST = 'VIEW_FORM_REQUEST';
const VIEW_FORM_SUCCESS = 'VIEW_FORM_SUCCESS';
const VIEW_FORM_FAILURE = 'VIEW_FORM_FAILURE';


const DELETE_FORM_REQUEST = 'DELETE_FORM_REQUEST';
const DELETE_FORM_SUCCESS = 'DELETE_FORM_SUCCESS';
const DELETE_FORM_FAILURE = 'DELETE_FORM_FAILURE';


const EDIT_FORM_REQUEST = 'EDIT_FORM_REQUEST';
const EDIT_FORM_SUCCESS = 'EDIT_FORM_SUCCESS';
const EDIT_FORM_FAILURE = 'EDIT_FORM_FAILURE';

export const formListRequest = () => ({
  type: FORM_LIST_REQUEST,
});

export const formListSuccess = (data) => ({
  type: FORM_LIST_SUCCESS,
  payload: data,
});

export const formListFailure = (error) => ({
  type: FORM_LIST_FAILURE,
  payload: error,
});

export const viewFormRequest = (formId) => ({
  type: VIEW_FORM_REQUEST,
});

export const viewFormSuccess = (data) => ({
  type: VIEW_FORM_SUCCESS,
  payload: data,
});

export const deleteFormFailure = (error) => ({
  type: DELETE_FORM_FAILURE,
  payload: error,
});


export const deleteFormRequest = (formId) => ({
  type: DELETE_FORM_REQUEST,
  payload:formId
});

export const deleteFormSuccess = (data) => ({
  type: DELETE_FORM_SUCCESS,
  payload: data,
});

export const viewFormFailure = (error) => ({
  type: VIEW_FORM_FAILURE,
  payload: error,
});

export const updateFormRequest = () => ({
  type: EDIT_FORM_REQUEST,
});

export const updateFormSuccess = (data) => ({
  type: EDIT_FORM_SUCCESS,
  payload: data,
});

export const updateFormFailure = (error) => ({
  type: EDIT_FORM_FAILURE,
  payload: error,
});

export const addFormField = (field) => {
  return {
    type: 'ADD_FORM_FIELD',
    payload: field,
  };
};

export const removeFormField = (fieldId) => {
  return {
    type: 'REMOVE_FORM_FIELD',
    payload: fieldId,
  };
};

export const createForm = (form) => {
  return {
    type: 'CREATE_FORM',
    payload: form,
  };
};

export const updateForm = (params) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch(updateFormRequest(params));
      return ApiUrls.edit_form(params)
        .then(response => {
          let { serverResponseData } = ResponseFilter(response);
          resolve(serverResponseData);
          dispatch(updateFormRequest(serverResponseData));
        })
        .catch((err) => {
          reject(err);
          dispatch(updateFormFailure(err));
        })
    });
  }
};

export const deleteForm = (formId) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch(deleteFormRequest(formId));
      return ApiUrls.delete_form(formId)
        .then(response => {
          let { serverResponseData } = ResponseFilter(response);
          resolve(serverResponseData);
          dispatch(deleteFormSuccess(serverResponseData));
        })
        .catch((err) => {
          reject(err);
          dispatch(deleteFormFailure(err));
        })
    });
  }
};

export const formList = () => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch(formListRequest());
      return ApiUrls.get_all_forms()
        .then(response => {
          let { serverResponseData } = ResponseFilter(response);
          resolve(serverResponseData);
          dispatch(formListSuccess(serverResponseData));
        })
        .catch((err) => {
          reject(err);
          dispatch(formListFailure(err));
        })
    });
  }
};

export const viewForm = (formId) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch(viewFormRequest(formId));
      return ApiUrls.view_form(formId)
        .then(response => {
          console.log(response,"yyyyyyyyyyyyyyyyyyyyy")
          let { serverResponseData } = ResponseFilter(response);
          resolve(serverResponseData);
          dispatch(viewFormSuccess(serverResponseData));
        })
        .catch((err) => {
          reject(err);
          dispatch(viewFormFailure(err));
        })
    });
  }
};




