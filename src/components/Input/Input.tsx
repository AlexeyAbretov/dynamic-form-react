import { ParamType } from '@types';
import React from 'react';

export const Input: React.FC<{
  value: ParamType;
  name: string;
  title: string;
  type: string;
  onChange: (value: ParamType, name: string) => void;
}> = ({ value, name, title, type, onChange }) => {
  return (
    <div>
      <span>{title}</span>
      <input
        type={type || 'text'}
        name={name}
        {...(type === 'checkbox'
          ? {
              checked: value as boolean,
            }
          : {
              value: value as string,
            })}
        onChange={e =>
          onChange(
            type === 'checkbox' ? e.target.checked : e.target.value,
            name,
          )
        }
      />
    </div>
  );
};
