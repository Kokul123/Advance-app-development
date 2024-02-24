import {  Link } from 'react-router-dom';
import '../css/navigation.css'; 
import logo from '../assets/logo.png';
//import{ lazy } from 'react'
//import LazyComponent from '../components/LazyComponents';

const logoStyle = {
  width: '150px',
  height: '40px',
};

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className='ele1'>
        <Link to="/home" className='linkStyle'>
          <img src={logo} alt="Logo" style={logoStyle}/>
        </Link>
        <li></li>
        <li className='ele'>
          <Link to="/home">Home</Link>
        </li>
        <li className='ele'>
          <Link to="/about">About</Link>
        </li>
        <li className='ele'>
          <Link to="/contact">Contact</Link>
        </li>
        <li className='ele'>
          <Link to="/user">User Profile</Link>
        </li>

        <li className='ele'>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
