import React from 'react';
import styles from './ButtonLabel.module.css';
import bindStyles from 'classnames/bind';

export type ButtonLabelProps = {
	variant?: 'white' | 'satin' | 'geraldine' | 'whiteDark' | 'gray';
	className?: string;
	active?: boolean;
	labelClassName?: string;
	beforeLabel?: React.ReactNode;
};

const styleNames = bindStyles.bind(styles);

export const roundedClassName = styleNames('labelRounded');

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
	className,
	labelClassName,
	active,
	variant = 'white',
	beforeLabel = null,
	children,
}) => {
	const theme = styleNames('label', variant, { active }, labelClassName);

	return (
		<span className={styleNames('root', className)}>
			{beforeLabel}
			<span className={theme}>{children}</span>
		</span>
	);
};
