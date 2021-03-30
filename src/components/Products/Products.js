import React from 'react';
import Grid, { Typography } from '@material-ui/core';
import classes from '*.module.css';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.' },
  { id: 2, name: 'Macbook', description: 'Apple macbook' },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => {
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Products product={product} />
          <CardContent>
            <div className={classes.CardContent}>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
            </div>
          </CardContent>
        </Grid>;
      })}
    </Grid>
  </main>;
};

export default Products;
