import {
  CREATE_FORM_SUCCEEDED,
  GET_FORMS_SUCCEEDED,
  CLEAR_CURRENT_FORM,
  SET_CURRENT_FORM_SUCCEEDED,
  DELETE_FORM_SUCCEEDED
} from '../types';

const initialState = {
  current: null,
  forms: []
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_FORM_SUCCEEDED:
      return {
        ...state,
        forms: [...state.forms, action.payload]
      };
    case GET_FORMS_SUCCEEDED:
    case DELETE_FORM_SUCCEEDED:
      return {
        ...state,
        forms: action.payload
      };
    case SET_CURRENT_FORM_SUCCEEDED:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_FORM:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
}
