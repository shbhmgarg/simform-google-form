import { Grid, IconButton } from '@material-ui/core';
import {
  DeleteOutlined,
  EditOutlined,
  MoreVert,
  Storage
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormTemplate from '../../layout/form-template/FormTemplate';
import './Home.css';
import recentDoc from './recentDoc.png';

const Home = () => {
  const forms = useSelector((state) => state.form.forms);
  console.log(forms);
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
                    <IconButton size='small'>
                      <EditOutlined color='primary' />
                    </IconButton>
                    <IconButton size='small'>
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
      <p className='recent-form-text'>Recent Forms</p>
      <div class='recent-docs'>
        <Grid container spacing={2} className='modal-body'>
          {recentForms()}
        </Grid>
      </div>
    </>
  );
};

export default Home;
