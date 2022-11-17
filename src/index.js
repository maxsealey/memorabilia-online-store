import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import productReducer, { productFetch } from './api/productSlice';
import products from './data/products';

const store = configureStore({
  reducer:{
    products: productReducer
  }
});

store.dispatch(productFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
