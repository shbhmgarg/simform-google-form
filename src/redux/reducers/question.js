import {
  ADD_QUESTION,
  CLEAR_CURRENT_QUESTION,
  SET_CURRENT_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  CURRENT_FORM_NAME,
  CLEAR_FORM,
  SET_UPDATE_FORM_QUESTIONS
} from '../types';

const initialState = {
  questions: [],
  current: null,
  formName: ''
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        current: state.questions.filter(
          (ques) => ques.questionId === action.payload
        )
      };
    case CLEAR_CURRENT_QUESTION:
      return {
        ...state,
        current: null
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => {
          if (q.questionId === action.payload.questionId) {
            q = action.payload;
          }
          return q;
        })
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (q) => q.questionId !== action.payload
        )
      };
    case CLEAR_FORM:
      return {
        ...state,
        questions: [],
        formName: ''
      };
    case CURRENT_FORM_NAME:
      return {
        ...state,
        formName: action.payload
      };
    case SET_UPDATE_FORM_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
}
