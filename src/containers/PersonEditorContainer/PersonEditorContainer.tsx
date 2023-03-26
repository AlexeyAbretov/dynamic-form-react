import { DynamicForm } from '@components';
import { AppContext } from '@contexts';
import { ParamType } from '@types';
import React, { useContext } from 'react';

export const PersonEditorContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChange = (value: ParamType, name: string) => {
    dispatch({ type: 'change', name, value });
  };

  return (
    <DynamicForm
      params={state.meta}
      model={state.paramValues}
      onChange={onChange}
    />
  );
};
