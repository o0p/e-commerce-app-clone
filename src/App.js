import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';

export const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await commerce.products.list();
  };

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
