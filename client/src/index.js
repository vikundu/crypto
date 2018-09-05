import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import CryptoApp from './redux/reducer';
import { Provider } from 'react-redux';


let store = createStore(CryptoApp);
console.log(store.getState());

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
