import React from 'react';
import App from './App';
import  './App.css';
import './index.css';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
