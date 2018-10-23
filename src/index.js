import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RomanNumeralFormatter from './RomanNumeralFormatter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RomanNumeralFormatter />, document.getElementById('root'));
registerServiceWorker();
