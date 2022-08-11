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

const mySort = (arr = [], func) => {
  return () => { 
    return arr.sort((value, next) => {
      return typeof func === 'function'
      ? func(value, next)
      : value > next
        ? 1
        : value < next
          ? -1
          : 0;
    });
  };
};
const arr = [ 1, 6, 15, 32 ];

const sortFunc1 = mySort([...arr]);
const sortFunc2 = mySort([...arr], (value, next) => {
  return value > next
  ? -1
  : value < next
    ? 1
    : 0;
});

console.log('sortFunc', sortFunc1(), sortFunc2())




