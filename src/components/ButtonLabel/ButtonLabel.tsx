import React from 'react';
import styles from './ButtonLabel.module.css';
import classNames from 'classnames/bind';

export type ButtonLabelProps = {
  variant?: 'white' | 'satin' | 'geraldine' | 'whiteDark' | 'gray';
  className?: string;
  active?: boolean;
  labelClassName?: string;
  beforeLabel?: React.ReactNode;
}

const styleClasses = classNames.bind(styles);

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
  className,
  labelClassName,
  active,
  variant = 'white',
  beforeLabel = null,
  children
}) => {
  const theme = styleClasses('label', variant, {active}, labelClassName); 
  return (
    <span className={styleClasses('root', className)}>
      {beforeLabel}
      <span className={theme}>{children}</span>
    </span>
  );
};