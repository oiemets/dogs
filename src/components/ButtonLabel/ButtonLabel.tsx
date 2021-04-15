import React from 'react';
import styles from './ButtonLabel.module.css';
import classNames from 'classnames/bind';

export type ButtonLabelProps = {
  variant?: 'white' | 'satin' | 'geraldine' | 'whiteDark' | 'gray' | 'purpleBlue';
  className?: string;
}

const styleClasses = classNames.bind(styles);

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
  className,
  children,
  variant = "white"
}) => {
  const theme = styleClasses('label', variant, className);  
  return (
    <span className={theme}>{children}</span>
  );
};