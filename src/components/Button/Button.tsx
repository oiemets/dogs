import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { ButtonLabelProps } from '../ButtonLabel/ButtonLabel';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';

export type ButtonProps = ButtonLabelProps & {
  onClick?: (e: React.SyntheticEvent) => void;
}

const styleNames = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({ 
  onClick,
  ...props 
}) => {
    const theme = styleNames('btn');
    return (
      <button 
        className={theme}
        onClick={onClick}
      >
        <ButtonLabel {...props}/>
      </button>
  );
};