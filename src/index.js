import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bulma/css/bulma.css'
import 'animate.css/animate.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// begin with routing

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
