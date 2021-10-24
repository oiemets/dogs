import React, { useState } from 'react';
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
	const [imgIsLoaded, setImgIsLoaded] = useState(false);

	return (
		<div className={styleNames('root', className)}>
			<img
				src={url}
				alt={url}
				className={styleNames({ img: imgIsLoaded })}
				onLoad={() => setImgIsLoaded(true)}
			/>
			{imgIsLoaded && (
				<SocialActions
					className={styleNames('actions')}
					isFavourited={isFavourited}
					onFavourite={onFavourite}
					onLikeChange={onLikeChange}
				/>
			)}
		</div>
	);
};
