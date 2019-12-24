import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
