import {
  CREATE_FORM_SUCCEEDED,
  GET_FORMS_SUCCEEDED,
  CLEAR_CURRENT_FORM,
  SET_CURRENT_FORM_SUCCEEDED,
  DELETE_FORM_SUCCEEDED
} from '../types';

export const createForm = (form) => ({
  type: CREATE_FORM_SUCCEEDED,
  payload: form
});

export const getForms = (forms) => ({
  type: GET_FORMS_SUCCEEDED,
  payload: forms
});

export const setCurrentForm = (form) => ({
  type: SET_CURRENT_FORM_SUCCEEDED,
  payload: form
});

export const deleteForm = (forms) => ({
  type: DELETE_FORM_SUCCEEDED,
  payload: forms
});

export const clearCurrentForm = () => ({
  type: CLEAR_CURRENT_FORM
});
