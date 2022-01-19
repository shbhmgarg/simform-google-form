import { IconButton } from '@material-ui/core';
import { MoreVert, UnfoldMore } from '@material-ui/icons';
import React from 'react';
import './FormTemplate.css';
import blank from './blank.png';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

const FormTemplate = () => {
  const navigate = useNavigate();
  const createForm = () => {
    const id = uuid();
    navigate(`/create-form/${id}`);
  };

  return (
    <div className='template-section'>
      <div className='template-top'>
        <div className='template-left'>
          <span style={{ fontSize: '16px', color: '#202124' }}>
            Start a new form
          </span>
        </div>
        <div className='template-right'>
          <div className='gallery-button'>
            Template Gallery
            <UnfoldMore fontSize='small' />
          </div>
          <IconButton>
            <MoreVert fontSize='small' />
          </IconButton>
        </div>
      </div>
      <div className='template-bottom'>
        <div className='card' onClick={createForm}>
          <img src={blank} alt='blank-template' className='card-image' />
          <p className='card-title'>Blank</p>
        </div>
      </div>
    </div>
  );
};

export default FormTemplate;
