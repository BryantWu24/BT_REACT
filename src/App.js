import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/redux/reducer/index'
import LoginIndex from './pages/login/index'
import RegisterIndex from './pages/register/index'
import NotFoundPage from './pages/404/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
    return (
        <Router >
            <Provider store={store}>
                <div style={{ height: '100VH', width: '100VW' }}>
                    <Switch>
                        <Route exact path="/login" component={LoginIndex} />
                        <Route exact path="/register" component={RegisterIndex} />
                        <Route component={NotFoundPage} />
                    </Switch>

                </div>
            </Provider>
        </Router>
    );
}

export default App;
