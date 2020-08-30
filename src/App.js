import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/redux/reducer/index'
import TextInput from './components/input/textInput'

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <Provider store={store}>
      <TextInput/>
    </Provider>
  );
}

export default App;
