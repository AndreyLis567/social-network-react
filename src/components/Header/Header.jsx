import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
   return (<header className={classes.header}>
      <img src="https://c7.hotpng.com/preview/945/821/71/dollar-sign-united-states-dollar-dollar-sign.jpg"></img>
      <div className={classes.loginBlock}>
         {props.isAuth? props.login
         : <NavLink to={'/login'}>Login</NavLink>}
      </div>
      </header>);
}

export default Header;