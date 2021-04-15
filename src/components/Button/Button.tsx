import styles from './Button.module.css';
import classNames from 'classnames/bind';

export interface ButtonProps {
  variant?: 'white' | 'satin' | 'geraldine' | 'whiteDark' | 'gray';
  onClick?: (e: React.SyntheticEvent) => void;
  className?: string;
}

const styleNames = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'white', 
  className
  }) => {
    const theme = styleNames('btn', variant, className);
    return (
      <button 
        className={theme}
        onClick={onClick}
      >
        {children}
      </button>
  );
};