import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import productReducer, { productFetch } from './api/productSlice';
import { productAPI } from './api/productAPI';

const store = configureStore({
  reducer:{
    products: productReducer,
    [productAPI.reducerPath]: productAPI.reducer
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productAPI.middleware)
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
