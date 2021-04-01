import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={}
              alt="Ruslan' s Shop"
              height="25px"
              className={classes.image}
            />
            Ruslan's Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
