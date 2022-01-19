import { Grid } from '@material-ui/core';
import { MoreVert, Storage } from '@material-ui/icons';
import React from 'react';
import FormTemplate from '../../layout/form-template/FormTemplate';
import './Home.css';
import recentDoc from './recentDoc.png';

const Home = () => {
  return (
    <>
      <FormTemplate />
      <p className='recent-form-text'>Recent Forms</p>
      <div class='recent-docs'>
        <Grid item xs={4}>
          <div className='doc-card'>
            <img src={recentDoc} alt='recent-doc' className='doc-card-image' />
            <div className='doc-card-content'>
              <div class='doc-detail'>
                <span class='doc-card-heading'>Name: </span>
                <span class='doc-card-value'>test</span>
              </div>
              <div class='doc-detail'>
                <span class='doc-card-heading'>URL: </span>
                <span class='doc-card-value'>test</span>
              </div>
              <div class='doc-detail'>
                <span class='doc-card-heading'>Created At: </span>
                <span class='doc-card-value'>test</span>
              </div>
              <div class='doc-detail'>
                <span class='doc-card-heading'>Total Responses: </span>
                <span class='doc-card-value'>test</span>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Home;
