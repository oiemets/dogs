import styles from './Button.module.css';
import bindStyles from 'classnames/bind';
import { ButtonLabelProps } from '../ButtonLabel/ButtonLabel';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';
import { roundedClassName } from '../ButtonLabel/ButtonLabel';
import { Link } from 'react-router-dom';

export type ButtonProps = ButtonLabelProps & {
	onClick?: (e: React.SyntheticEvent) => void;
	linkTo?: string;
};

const styleNames = bindStyles.bind(styles);

export const Button: React.FC<ButtonProps> = ({
	linkTo,
	onClick,
	labelClassName = styleNames('label'),
	...props
}) => {
	const theme = styleNames('btn');

	const buttonLabel = (
		<ButtonLabel
			{...props}
			labelClassName={styleNames(labelClassName, roundedClassName)}
		/>
	);

	return (
		<>
			{linkTo ? (
				<Link to={linkTo}>{buttonLabel}</Link>
			) : (
				<button className={theme} onClick={onClick}>
					{buttonLabel}
				</button>
			)}
		</>
	);
};
