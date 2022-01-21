import {
  CREATE_FORM,
  SET_CURRENT_FORM,
  CURRENT_FORM_NAME,
  UPDATE_FORM,
  DELETE_FORM
} from '../types';

export const createForm = (form) => ({
  type: CREATE_FORM,
  payload: form
});

export const setCurrentForm = (formId) => ({
  type: SET_CURRENT_FORM,
  payload: formId
});

export const updateForm = (form) => ({
  type: UPDATE_FORM,
  payload: form
});

export const deleteForm = (formId) => ({
  type: DELETE_FORM,
  payload: formId
});
