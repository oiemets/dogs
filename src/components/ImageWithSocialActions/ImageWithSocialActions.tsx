import React from 'react';
import {
	SocialActions,
	SocialActionsProps,
} from '../SocialActions/SocialActions';
import styles from './ImageWithSocialActions.module.css';
import bindStyles from 'classnames/bind';

type ImageWithSocialActionsProps = SocialActionsProps & {
	url?: string;
};

const styleNames = bindStyles.bind(styles);

export const ImageWithSocialActions: React.FC<ImageWithSocialActionsProps> = ({
	url,
	isFavourited,
	onFavourite,
	onLikeChange,
	className,
}) => {
	return (
		<div className={styleNames('root', className)}>
			<img src={url} alt={url} className={styleNames('img')} />
			<SocialActions
				className={styleNames('actions')}
				isFavourited={isFavourited}
				onFavourite={onFavourite}
				onLikeChange={onLikeChange}
			/>
		</div>
	);
};
