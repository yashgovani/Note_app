import classes from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <header className={classes.Toolbar}>
    <nav className={classes.DesktopOnly}>
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} exact to="/home">
        Home
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} exact to="/addnotes">
        Add Note
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} exact to="/notes">
        Notes
      </NavLink>
    </li>
  </ul>
  </nav>
  </header>
);
export default Navbar;
