import styles from './Button.module.css';
import bindStyles from 'classnames/bind';
import { ButtonLabelProps } from '../ButtonLabel/ButtonLabel';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';
import { roundedClassName } from '../ButtonLabel/ButtonLabel';

export type ButtonProps = ButtonLabelProps & {
  onClick?: (e: React.SyntheticEvent) => void;
}

const styleNames = bindStyles.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  onClick,
  labelClassName = styleNames('label'),
  ...props
}) => {
  const theme = styleNames('btn');
  return (
    <button
      className={theme}
      onClick={onClick}
    >
      <ButtonLabel
        {...props}
        labelClassName={
          styleNames(labelClassName, roundedClassName)
        }
      />
    </button>
  );
};
