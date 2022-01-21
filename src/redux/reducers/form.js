import {
  CREATE_FORM,
  SET_CURRENT_FORM,
  CURRENT_FORM_NAME,
  DELETE_FORM
} from '../types';

const initialState = {
  current: null,
  forms: []
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_FORM:
      console.log(action);
      return {
        ...state,
        forms: [...state.forms, action.payload]
      };
    case SET_CURRENT_FORM:
      return {
        ...state,
        current: state.forms.filter((form) => form.formId === action.payload)
      };
    case DELETE_FORM:
      return {
        ...state,
        forms: state.forms.filter((f) => f.formId !== action.payload)
      };
    default:
      return state;
  }
}
