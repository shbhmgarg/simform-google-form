import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { SUBMIT_FORM_FAILED, SUBMIT_FORM_SUCCEEDED } from '../types';

async function submitResponseAPIRequest(response) {
  try {
    const res = await axios.post('http://localhost:8080/responses', response);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export function* submitResponse(action) {
  try {
    const form = yield call(submitResponseAPIRequest, action.payload);
    yield put({ type: SUBMIT_FORM_SUCCEEDED });
  } catch (e) {
    yield put({ type: SUBMIT_FORM_FAILED });
  }
}
