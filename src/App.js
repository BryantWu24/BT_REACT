import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/redux/reducer/index'
import LoginIndex from './pages/login/index'

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <Provider store={store}>
      <div style={{height: '100VH', width: '100VW' }}>
        <LoginIndex />
      </div>
    </Provider>
  );
}

export default App;
