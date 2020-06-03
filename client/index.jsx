import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { AppContainer } from 'react-hot-loader';
import Router from './router';
// import './styles/index.css';

ReactDOM.render(<Router/>,document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}