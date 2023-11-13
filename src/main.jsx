import React from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
import Router from './Router';
import './index.css';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'Chakra Petch:300,400,700']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
