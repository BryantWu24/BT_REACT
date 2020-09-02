import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/redux/reducer/index'
import LoginPage from './pages/auth/login/index'
import RegisterPage from './pages/auth/register/index'
import NotFoundPage from './pages/auth/notFound/index'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './core/history';

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <div style={{ height: '100VH', width: '100VW' }}>
                    <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
