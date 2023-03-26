import React from 'react';

import { Param, ParamType, ParamValue } from '@types';
import { Input } from 'components/Input';

export const DynamicForm: React.FC<{
  params: Param[];
  model: ParamValue[];
  onChange: (value: ParamType, name: string) => void;
}> = ({ params, model, onChange }) => {
  return (
    <>
      {params.map(x => {
        switch (x.type) {
          case 'number':
            return (
              <Input
                onChange={(value, name) => onChange(Number(value), name)}
                key={x.name}
                name={x.name}
                type="number"
                title={x.title}
                value={model.find(w => w.paramId === x.id).value as string}
              />
            );
          case 'boolean':
            return (
              <Input
                key={x.name}
                name={x.name}
                type="checkbox"
                title={x.title}
                onChange={onChange}
                value={model.find(w => w.paramId === x.id).value as string}
              />
            );
          default:
            return (
              <Input
                onChange={onChange}
                key={x.name}
                name={x.name}
                type="text"
                title={x.title}
                value={model.find(w => w.paramId === x.id).value as string}
              />
            );
        }
      })}
    </>
  );
};
