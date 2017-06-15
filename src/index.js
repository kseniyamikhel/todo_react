import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}><App/></ConnectedRouter>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
