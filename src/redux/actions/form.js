import { CREATE_FORM, SET_CURRENT_FORM, CURRENT_FORM_NAME } from '../types';

export const createForm = (form) => ({
  type: CREATE_FORM,
  payload: form
});

export const setCurrentForm = (formId) => ({
  type: SET_CURRENT_FORM,
  payload: formId
});
