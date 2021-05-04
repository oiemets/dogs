import React from 'react';
import bindStyles from 'classnames/bind';
import styles from './Select.module.css';

const styleNames = bindStyles.bind(styles);

type SelectProps = {
  variant?: 'white' | 'gray';
  option: Record<string, string>[];
  defaultOpt?: string;
  className?: string;
  onChange?: (e: React.SyntheticEvent) => void;
}

export const Select: React.FC<SelectProps> = ({
  className,
  variant = 'gray',
  option,
  defaultOpt,
  onChange
}) => {
  return (
    <div className={styleNames('root', className, variant)}>
      <select
        className={styleNames('select', `${variant}Select`)}
        value={defaultOpt}
        onChange={onChange}
      >
        {
          option.map(o =>
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
