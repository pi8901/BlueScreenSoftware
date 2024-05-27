import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


Modal.setAppElement(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);