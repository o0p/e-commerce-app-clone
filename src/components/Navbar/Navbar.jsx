import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  // Menu,
  // MenuItem,
  // Icon,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/online-shopping.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Ruslan' s Shop"
              height="25px"
              className={classes.image}
            />
            Ruslan's Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton area-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
