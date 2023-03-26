import React from 'react';

export type ParamType = string | number | boolean;

// описание поля
export interface Param {
  id: number;
  name: string;
  title: string;
  type: ParamType;
}

// значение поля
export interface ParamValue {
  // id from Param
  paramId: number;
  value: ParamType;
}

export type AppStateType = {
  // описание полей формы
  meta: Param[];
  // значения полей формы
  paramValues: ParamValue[];
};

export type Action = {
  type: string;
  name: string;
  value: ParamType;
};

export type AppContextType = {
  dispatch: React.Dispatch<Action>;
  state: AppStateType;
};
