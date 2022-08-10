import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import * as mdb from 'mdb-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'typeface-quicksand';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



