import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router';
import "./style/global.css";
const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
