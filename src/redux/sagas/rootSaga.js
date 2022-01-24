import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  CREATE_FORM_REQESTED,
  DELETE_FORM_REQUESTED,
  GET_FORMS_REQUESTED,
  SET_CURRENT_FORM_REQUESTED,
  UPDATE_FORM_REQUESTED
} from '../types';
import {
  createNewForm,
  deleteFormById,
  getFormById,
  getForms,
  updateFormById
} from './form';

export function* createFormSaga() {
  yield takeLatest(CREATE_FORM_REQESTED, createNewForm);
}

export function* getFormsSaga() {
  yield takeLatest(GET_FORMS_REQUESTED, getForms);
}

export function* getFormByIdSaga() {
  yield takeLatest(SET_CURRENT_FORM_REQUESTED, getFormById);
}

export function* updateFormByIdSaga() {
  yield takeLatest(UPDATE_FORM_REQUESTED, updateFormById);
}

export function* deleteFormByIdSaga() {
  yield takeLatest(DELETE_FORM_REQUESTED, deleteFormById);
}

export function* RootSaga() {
  yield all([
    fork(createFormSaga),
    fork(getFormsSaga),
    fork(getFormByIdSaga),
    fork(updateFormByIdSaga),
    fork(deleteFormByIdSaga)
  ]);
}
