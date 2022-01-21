import { Grid, IconButton } from '@material-ui/core';
import {
  DeleteOutlined,
  EditOutlined,
  MoreVert,
  Storage
} from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteForm, setCurrentForm } from '../../../redux/actions/form';
import FormTemplate from '../../layout/form-template/FormTemplate';
import './Home.css';
import recentDoc from './recentDoc.png';

const Home = () => {
  const forms = useSelector((state) => state.form.forms);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edit = (formId) => {
    dispatch(setCurrentForm(formId));
    navigate(`/update-form/${formId}`);
  };

  const deleteExistingForm = (formId) => {
    dispatch(deleteForm(formId));
  };

  const recentForms = () => {
    return (
      forms &&
      forms.map((form, i) => {
        return (
          <Grid item xs={4} key={i}>
            <div className='doc-card'>
              <img
                src={recentDoc}
                alt='recent-doc'
                className='doc-card-image'
              />
              <div className='doc-card-content'>
                <div class='doc-detail'>
                  <span class='doc-card-heading'>Name: </span>
                  <span class='doc-card-value'>{form.name}</span>
                </div>
                <div class='doc-detail'>
                  <span class='doc-card-heading'>URL: </span>
                  <span class='doc-card-value'>
                    <Link to={`/submit/${form.formId}`}>
                      Link to Submission
                    </Link>
                  </span>
                </div>
                <div class='doc-detail'>
                  <span class='doc-card-heading'>Created At: </span>
                  <span class='doc-card-value' style={{ display: 'block' }}>
                    {form.createdDate.toLocaleDateString()}{' '}
                    {form.createdDate.toLocaleTimeString()}
                  </span>
                </div>
                <div class='doc-detail'>
                  <span class='doc-card-heading'>Total Responses: </span>
                  <span class='doc-card-value'>test</span>
                </div>
                <div class='doc-detail'>
                  <div class='action-buttons'>
                    <IconButton size='small' onClick={() => edit(form.formId)}>
                      <EditOutlined color='primary' />
                    </IconButton>
                    <IconButton
                      size='small'
                      onClick={() => deleteExistingForm(form.formId)}
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
      <div class='recent-docs'>
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
