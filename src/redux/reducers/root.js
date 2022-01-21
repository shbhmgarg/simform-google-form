import { combineReducers } from 'redux';
import formsReducer from './form';
import questionsReducer from './question';

const reducers = {
  question: questionsReducer,
  form: formsReducer
};

export default combineReducers(reducers);
