import { AppContextType } from '@types';
import React from 'react';

export const AppInitialValues: AppContextType = {
  state: {
    meta: [],
    paramValues: [],
  },
  dispatch: null,
};

export const AppContext = React.createContext(AppInitialValues);
