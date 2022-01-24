import { Grid, IconButton } from '@material-ui/core';
import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  DELETE_FORM_REQUESTED,
  GET_FORMS_REQUESTED
} from '../../../redux/types';
import FormTemplate from '../../layout/form-template/FormTemplate';
import './Home.css';
import recentDoc from './recentDoc.png';

const Home = () => {
  const forms = useSelector((state) => state.form.forms);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edit = (formId) => {
    navigate(`/update-form/${formId}`);
  };

  const deleteExistingForm = (formId) => {
    dispatch({ type: DELETE_FORM_REQUESTED, payload: formId });
  };

  useEffect(() => {
    dispatch({ type: GET_FORMS_REQUESTED });
  }, [dispatch]);

  const recentForms = () => {
    return (
      forms &&
      forms.map((form, i) => {
        return (
          <Grid item lg={6} md={6} key={i}>
            <div className='doc-card'>
              <img
                src={recentDoc}
                alt='recent-doc'
                className='doc-card-image'
              />
              <div className='doc-card-content'>
                <div className='doc-detail'>
                  <span className='doc-card-heading'>Name: </span>
                  <span className='doc-card-value'>{form.name}</span>
                </div>
                <div className='doc-detail'>
                  <span className='doc-card-heading'>URL: </span>
                  <span className='doc-card-value'>
                    <Link to={`/submit/${form.id}`}>Link to Submission</Link>
                  </span>
                </div>
                <div className='doc-detail'>
                  <span className='doc-card-heading'>Created At: </span>
                  <span className='doc-card-value' style={{ display: 'block' }}>
                    {new Date(form.createdDate).toLocaleDateString()}{' '}
                    {new Date(form.createdDate).toLocaleTimeString()}
                  </span>
                </div>
                <div className='doc-detail'>
                  <span className='doc-card-heading'>Total Responses: </span>
                  <span className='doc-card-value'>{form.totalResponses}</span>
                </div>
                <div className='doc-detail'>
                  <div className='action-buttons'>
                    <IconButton size='small' onClick={() => edit(form.id)}>
                      <EditOutlined color='primary' />
                    </IconButton>
                    <IconButton
                      size='small'
                      onClick={() => deleteExistingForm(form.id)}
                    >
                      <DeleteOutlined color='error' />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        );
      })
    );
  };

  return (
    <>
      <FormTemplate />
      <p className='recent-form-text' style={{ fontSize: '20px' }}>
        Recent Forms
      </p>
      <div className='recent-docs'>
        <Grid container spacing={2} className='modal-body'>
          {forms && forms.length > 0 ? (
            recentForms()
          ) : (
            <Grid item xs={4}>
              Please add new form
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default Home;
