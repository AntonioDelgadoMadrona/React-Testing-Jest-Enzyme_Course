import React from 'react';
import './App.css';
import hookActions from './actions/hookActions';

import languageContext from './contexts/languageContext';

import LanguagePicker from './LanguagePicker';
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
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = React.useReducer(reducer, { secretWord: null, language: 'en' });

  const setSecretWord = secretWord => dispatch({ type: 'setSecretWord', payload: secretWord });
  const setLanguage = language => { dispatch({ type: 'setLanguage', payload: language }) }

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
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
}

export default App;
