import styles from './Button.module.css';
import classNames from 'classnames/bind';

export interface ButtonProps {
  variant?: 'white' | 'satin' | 'geraldine' | 'whiteDark' | 'satinDark' | 'gray';
  onClick?: (e: React.SyntheticEvent) => void;
  className?: string;
}

const styleNames = classNames.bind(styles);

const btnVariant = {
  white: styleNames('btn', 'white'),
  satin: styleNames('btn', 'satin'),
  geraldine: styleNames('btn', 'geraldine'),
  whiteDark: styleNames(),
  satinDark: styleNames(),
  gray: styleNames(),
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'white', 
  className 
  }) => {
    const theme = btnVariant[variant];
    return (
      <button 
        className={className ? className : theme}
        onClick={onClick}
      >
          {children}
      </button>
  );
}