import React, { useCallback } from 'react';
import styles from './SocialActions.module.css';
import bindStyles from 'classnames/bind';
import { IconButton } from '../IconButton/IconButton';

export type SocialActionsProps = {
	onLikeChange: (value: number) => void;
	onFavourite: () => void;
	isFavourited?: boolean;
	className?: string;
};

const styleNames = bindStyles.bind(styles);

export const SocialActions: React.FC<SocialActionsProps> = ({
	onLikeChange,
	onFavourite,
	isFavourited = false,
	className,
}) => {
	const onClick = useCallback(
		value => {
			onLikeChange(value);
		},
		[onLikeChange]
	);

	const smile = () => onClick(1);
	const sad = () => onClick(0);

	return (
		<div className={styleNames('container', className)}>
			<IconButton
				onClick={smile}
				icon='smile'
				size='L'
				className={styleNames('label', 'like')}
			/>
			<IconButton
				onClick={onFavourite}
				icon={isFavourited ? 'heartFilled' : 'heart'}
				size='L'
				className={styleNames('label', 'favourite')}
			/>
			<IconButton
				onClick={sad}
				icon='sad'
				size='L'
				className={styleNames('label', 'dislike')}
			/>
		</div>
	);
};
