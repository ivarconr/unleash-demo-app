import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { UnleashClient } from 'unleash-proxy-client';
import { environment, clientKey, unleashUrl } from './constants';


let userId = localStorage.getItem('userId');

if(!userId) {
    userId = Math.round(Math.random() * 100000000);
    localStorage.setItem('userId', userId);
};

const unleash = new UnleashClient({
    url: unleashUrl,
    clientKey: 'proxy-123',
    refreshInterval: 2,
    appName: 'react-app',
    environment,
});
unleash.updateContext({userId});
unleash.start();

ReactDOM.render(<App unleash={unleash} userId={userId} />, document.getElementById('root'));
registerServiceWorker();
