import React from 'react';
import './FormHeader.css';
import logo from '../header/logo.png';

const FormHeader = () => {
  return (
    <div className='form-header'>
      <div className='form-header-left'>
        <img src={logo} alt='logo' style={{ height: '45px', width: '40px' }} />{' '}
        <input
          style={{ marginLeft: '10px' }}
          type='text'
          placeholder='Untitled Form'
          value={''}
          className='form-name'
        />
      </div>
    </div>
  );
};

export default FormHeader;
