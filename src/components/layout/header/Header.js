import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <Link to='/' exact>
          <img src={logo} alt='logo' />{' '}
        </Link>
        <span className='header-name'>Simform Forms</span>
      </div>
      <div className='header-right'></div>
    </div>
  );
};

export default React.memo(Header);
