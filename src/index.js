import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bulma/css/bulma.css'
import 'animate.css/animate.css'

// import components
import App from './App'
import stores from './store'
import { Provider } from 'mobx-react'

// import registerServiceWorker from './registerServiceWorker'

// begin with routing

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
