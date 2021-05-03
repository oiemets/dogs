import React from 'react';
import bindStyles from 'classnames/bind';
import styles from './Select.module.css';

const styleNames = bindStyles.bind(styles);

type SelectProps = {
  variant?: 'white' | 'gray';
  option: { value: string, text: string }[];
  defaultOpt?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  className,
  variant = 'gray',
  option,
  defaultOpt
}) => {
  return (
    <div className={styleNames('root', className, variant)}>
      <select className={styleNames('select', `${variant}Select`)}>
        {
          defaultOpt ?
            <option
              value=""
              className={styleNames('opt')}
            >
              {defaultOpt}
            </option> :
            null
        }
        {
          option.map(o =>
            <option
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
