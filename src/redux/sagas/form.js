import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  createForm,
  getForms as getFormsAction,
  setCurrentForm
} from '../actions/form';
import {
  CREATE_FORM_FAILED,
  DELETE_FORM_FAILED,
  DELETE_FORM_SUCCEEDED,
  GET_FORMS_FAILED,
  SET_CURRENT_FORM_FAILED,
  UPDATE_FORM_FAILED,
  UPDATE_FORM_SUCCEEDED
} from '../types';

async function createNewFormAPIRequest(form) {
  try {
    const res = await axios.post('http://localhost:8080/forms', form);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export function* createNewForm(action) {
  try {
    const form = yield call(createNewFormAPIRequest, action.payload);
    yield put(createForm(form));
  } catch (e) {
    yield put({ type: CREATE_FORM_FAILED });
  }
}

async function getFormsAPIRequest() {
  try {
    let res = await axios.get('http://localhost:8080/forms');
    let result = Promise.all(
      res.data.map(async (ele) => {
        let ans = await axios.get(
          `http://localhost:8080/responses?formId=${ele.id}`
        );
        ele.totalResponses = ans.data.length;
        return ele;
      })
    );
    result = await result;
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export function* getForms(action) {
  try {
    const forms = yield call(getFormsAPIRequest);
    yield put(getFormsAction(forms));
  } catch (e) {
    yield put({ type: GET_FORMS_FAILED });
  }
}

async function getFormByIdAPIRequest(formId) {
  try {
    const res = await axios.get(`http://localhost:8080/forms/${formId}`);
    if (res.status) return res.data;
    else return null;
  } catch (error) {
    throw error;
  }
}

export function* getFormById(action) {
  try {
    const form = yield call(getFormByIdAPIRequest, action.payload);
    yield put(setCurrentForm(form));
  } catch (e) {
    yield put({ type: SET_CURRENT_FORM_FAILED });
  }
}

async function updateFormByIdAPIRequest(form) {
  try {
    //eslint-disable-next-line
    const res = await axios.put(`http://localhost:8080/forms/${form.id}`, form);
  } catch (error) {
    throw error;
  }
}

export function* updateFormById(action) {
  try {
    //eslint-disable-next-line
    const form = yield call(updateFormByIdAPIRequest, action.payload);
    yield put({ type: UPDATE_FORM_SUCCEEDED });
  } catch (e) {
    yield put({ type: UPDATE_FORM_FAILED });
  }
}

async function deleteFormByIdAPIRequest(formId) {
  try {
    await axios.delete(`http://localhost:8080/forms/${formId}`);
  } catch (error) {
    throw error;
  }
}

export function* deleteFormById(action) {
  try {
    yield call(deleteFormByIdAPIRequest, action.payload);
    const forms = yield call(getFormsAPIRequest);
    yield put({ type: DELETE_FORM_SUCCEEDED, payload: forms });
  } catch (e) {
    yield put({ type: DELETE_FORM_FAILED });
  }
}
