import React from 'react';
import './Header.css';
import { Menu } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import logo from './logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <IconButton>
          <Menu />
        </IconButton>
        <img src={logo} alt='logo' />{' '}
        <span className='header-name'>Simform Forms</span>
      </div>
      <div className='header-right'></div>
    </div>
  );
};

export default React.memo(Header);
