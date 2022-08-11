import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const arr = [
    0,
    12,
    25,
    'hello world',
    'mixalk',
    53,
    94,
    18,
    'SyN4',
    24,
    13,
];

const sortNumbers = arr
  .filter((value) => {
    if (typeof value === 'number'){
      return true;
    }
    return false;
  })
  .sort((prev, next) => {
    if (prev < next) {
      return 1;
    }
    if (prev > next) {
      return -1;
    }
      return 0;
  });

  const sortItems = arr
  .filter((value) => {
    return typeof value === 'string'
       ? true
       : false;
 })
  .sort((prev, next) => {
    if (prev < next) {
      return -1;
    }
    if (prev > next) {
      return 1;
    }
      return 0;
  });

console.log('arr2', sortItems.concat(sortNumbers));



