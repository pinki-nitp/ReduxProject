


import { configureStore } from '@reduxjs/toolkit';


import React from 'react';
import ReactDOM from 'react-dom/client';
import UserReducers from './UserReducer';


import App from './App';
import { Provider } from 'react-redux';

 const store = configureStore({
  reducer: {
    users: UserReducers,
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
)
 

