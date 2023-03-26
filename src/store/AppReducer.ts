import { Action, AppStateType } from '@types';

export const AppReducer = (
  state: AppStateType,
  action: Action,
): AppStateType => {
  const { type } = action;

  switch (type) {
    case 'change': {
      const meta = state.meta.find(x => x.name === action.name);

      return {
        ...state,
        paramValues: state.paramValues.map(x => ({
          ...x,
          value: x.paramId === meta.id ? action.value : x.value,
        })),
      };
    }
    default: {
      return state;
    }
  }
};

export const InitialState: AppStateType = {
  meta: [
    {
      id: 1,
      name: 'FirstName',
      title: 'Имя',
      type: 'string',
    },
    {
      id: 2,
      name: 'MiddleName',
      title: 'Отчество',
      type: 'string',
    },
    {
      id: 3,
      name: 'LasteName',
      title: 'Фамилия',
      type: 'string',
    },
    {
      id: 4,
      name: 'Age',
      title: 'Возраст',
      type: 'number',
    },
    {
      id: 5,
      name: 'War',
      title: 'Военнообязанный',
      type: 'boolean',
    },
  ],
  paramValues: [
    {
      paramId: 1,
      value: 'Иван',
    },
    {
      paramId: 2,
      value: '',
    },
    {
      paramId: 3,
      value: 'Иванов',
    },
    {
      paramId: 4,
      value: 0,
    },
    {
      paramId: 5,
      value: true,
    },
  ],
};
