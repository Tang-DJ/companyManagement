import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
