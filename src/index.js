import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import  './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);
reportWebVitals();
