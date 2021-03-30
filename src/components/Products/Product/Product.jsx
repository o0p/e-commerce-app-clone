import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';

function Product() {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5"></Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;
