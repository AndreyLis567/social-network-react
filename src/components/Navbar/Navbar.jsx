import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
   return (
      <nav className={classes.nav}>
         <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
         </div>
         <div className={`${classes.item} ${classes.activeLink}`}>
            <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
         </div>
         <div className={`${classes.item} ${classes.activeLink}`}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to="/photos" activeClassName={classes.activeLink}>Photos</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;