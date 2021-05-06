import React, { useCallback } from 'react';
import bindStyles from 'classnames/bind';
import styles from './Select.module.css';

const styleNames = bindStyles.bind(styles);

export type SelectValue = string | number;

export type SelectBreed = { value: SelectValue, text: string };

type SelectProps = {
  variant?: 'white' | 'gray';
  options: SelectBreed[];
  value?: SelectValue;
  className?: string;
  onChange?: (value: SelectBreed) => void;
}

export const Select: React.FC<SelectProps> = ({
  className,
  variant = 'gray',
  options,
  value,
  onChange
}) => {

  const onSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(options.filter(option => String(option.value) === e.target.value)[0]);
  }, []);

  return (
    <div className={styleNames('root', className, variant)}>
      <select
        className={styleNames('select', `${variant}Select`)}
        value={value || options[0].value}
        onChange={onSelectChange}
      >
        {
          options.map(o =>
            <option
              key={o.value}
              value={o.value}
              className={styleNames('opt')}
            >
              {o.text}
            </option>
          )
        }
      </select>
    </div>
  );
};
