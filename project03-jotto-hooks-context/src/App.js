import React from 'react';
import './App.css';
import hookActions from './actions/hookActions';

import Input from './Input';

/**
 * reducer to update state
 * @param {object} state existing date
 * @param {object} action contains 'type' and 'payload' properties for the state update
 * @return {object} new state
 */
function reducer(state = {}, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getscretWord(setSecretWord);
  }, []);

  if (state.secretWord === null) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-onlu">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  );
}

export default App;
