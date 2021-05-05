import React, { useCallback } from 'react';
import bindStyles from 'classnames/bind';
import styles from './Select.module.css';

const styleNames = bindStyles.bind(styles);

export type SelectValue = string | number;

type SelectProps = {
  variant?: 'white' | 'gray';
  options: { value: SelectValue, text: string }[];
  value?: SelectValue;
  className?: string;
  onChange?: (value: SelectValue) => void;
}

export const Select: React.FC<SelectProps> = ({
  className,
  variant = 'gray',
  options,
  value,
  onChange
}) => {

  const onSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(options.filter(option => String(option.value) === e.target.value)[0].value);
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
