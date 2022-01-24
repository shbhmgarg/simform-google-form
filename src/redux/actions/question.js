import {
  ADD_QUESTION,
  GET_QUESTION,
  SET_CURRENT_QUESTION,
  CLEAR_CURRENT_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  CURRENT_FORM_NAME,
  CLEAR_FORM,
  SET_UPDATE_FORM_QUESTIONS
} from '../types';

export const getQuestion = () => ({
  type: GET_QUESTION
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: question
});

export const setCurrentQuestion = (questionId) => ({
  type: SET_CURRENT_QUESTION,
  payload: questionId
});

export const clearCurrentQuestion = () => ({
  type: CLEAR_CURRENT_QUESTION
});

export const updateQuestion = (question) => ({
  type: UPDATE_QUESTION,
  payload: question
});

export const deleteQuestion = (questionId) => ({
  type: DELETE_QUESTION,
  payload: questionId
});

export const clearFormQuestions = () => ({
  type: CLEAR_FORM
});

export const currentFormName = (name) => ({
  type: CURRENT_FORM_NAME,
  payload: name
});

export const setUpdateFormQuestions = (questions) => ({
  type: SET_UPDATE_FORM_QUESTIONS,
  payload: questions
});
