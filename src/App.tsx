import React, { useReducer } from 'react';
import { AppContext } from '@contexts';
import { AppReducer, InitialState } from '@store';
import { PersonEditorContainer } from '@containers';
import styles from './App.css';

export const App = () => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className={styles.App}>
        <PersonEditorContainer />
      </div>
    </AppContext.Provider>
  );
};
