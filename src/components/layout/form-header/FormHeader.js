import React from 'react';
import './FormHeader.css';
import logo from '../header/logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FormHeader = ({ nameDisable }) => {
  const formName = useSelector((state) => state.question.formName);
  return (
    <div className='form-header'>
      <div className='form-header-left'>
        <Link to='/' exact>
          <img
            src={logo}
            alt='logo'
            style={{ height: '45px', width: '40px' }}
          />{' '}
        </Link>

        <input
          style={{ marginLeft: '10px' }}
          type='text'
          placeholder='Untitled Form'
          value={formName}
          className='form-name'
          disabled={nameDisable}
        />
      </div>
    </div>
  );
};

export default FormHeader;
