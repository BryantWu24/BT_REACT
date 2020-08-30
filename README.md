This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `Semantic-UI-React`

### how to install semantic-ui-react
1.Open Terminal and input "npm i semantic-ui-react --save " and " npm i semantic-ui-caa --save "

2.Open src/index.js and input "import 'semantic-ui-css/semantic.min.css';"

## `React-Redux`

### how to install react-redux
1.Open Terminal and input "npm i react-redux --save" and " npm i redux --save"

2.Create action/index.js and reducer/index.js (Find Project_React Commit)

```
// action/index.js EXAMPLE
export const handleTextInput = (val) => {
    return {
        type: 'HANDLE_TEXT_INPUT',
        input: val.target.value
    }
}
```

```
// reducer/index.js EXAMPLE
const initState = {
    handleTextInput: ''
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case 'HANDLE_TEXT_INPUT':
            return Object.assign({}, state, {
                handleTextInput: action.input
            })

        default:
            return state
    }
}

export default Reducer
```

3.Open App.js do something...

```
//App.js EXAMPLE
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

```