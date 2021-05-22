import React, { useEffect } from 'react';
import { ImageWithSocialActions } from '../../components';
import { getRandomImage, loadRandomImage, useAppDispatch } from '../../state';
import { useTypedSelector } from '../../hooks';

export const Voting: React.FC = () => {
	const dispatch = useAppDispatch();
	const image = useTypedSelector(state => getRandomImage(state));

	const onLikeChange = () => console.log('onLikeChange');
	const onFavourite = () => console.log('onFavourite');

	useEffect(() => {
		dispatch(loadRandomImage());
	}, [dispatch]);
	return (
		<>
			<ImageWithSocialActions
				url={image?.url}
				onLikeChange={onLikeChange}
				onFavourite={onFavourite}
			/>
		</>
	);
};
