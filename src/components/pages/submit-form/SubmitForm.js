import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  currentFormName,
  setUpdateFormQuestions
} from '../../../redux/actions/question';
import { SET_CURRENT_FORM_REQUESTED } from '../../../redux/types';
import FormHeader from '../../layout/form-header/FormHeader';
import Header from '../../layout/header/Header';
import SubmissionForm from '../../layout/submission-form/SubmissionForm';

const SubmitForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const currentForm = useSelector((state) => state.form.current);

  useEffect(() => {
    dispatch({ type: SET_CURRENT_FORM_REQUESTED, payload: params.id });
  }, [dispatch]);

  useEffect(() => {
    if (currentForm) {
      dispatch(currentFormName(currentForm.name));
      dispatch(setUpdateFormQuestions(currentForm.questions));
    }
  }, [currentForm]);

  // dispatch(currentFormName(''));
  //   dispatch(setUpdateFormQuestions([]));

  return (
    <>
      <Header />
      <SubmissionForm />
    </>
  );
};

export default SubmitForm;
