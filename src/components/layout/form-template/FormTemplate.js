import { IconButton } from '@material-ui/core';
import { MoreVert, UnfoldMore } from '@material-ui/icons';
import React from 'react';
import './FormTemplate.css';
import blank from './blank.png';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import {
  currentFormName,
  setUpdateFormQuestions
} from '../../../redux/actions/question';
import { clearCurrentForm } from '../../../redux/actions/form';

const FormTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createForm = () => {
    const id = uuid();
    dispatch(currentFormName(''));
    dispatch(setUpdateFormQuestions([]));
    dispatch(clearCurrentForm());
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
