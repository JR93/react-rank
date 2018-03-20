import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from 'component/Index/App';
import 'css/index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

