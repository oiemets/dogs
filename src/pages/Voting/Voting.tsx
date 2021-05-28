import React, { useCallback, useEffect, useState } from 'react';
import { ImageWithSocialActions } from '../../components';
import {
	useAppDispatch,
	loadRandomImage,
	getRandomImageUrlAndId,
	addFavourite,
	deleteFavourite,
	addVote,
	getLatestLogId,
} from '../../state';
import { useTypedSelector } from '../../hooks';

export const Voting: React.FC = () => {
	const dispatch = useAppDispatch();

	const [isFavourited, setIsFavourited] = useState(false);
	const [isVoted, setIsVoted] = useState(false);

	const image = useTypedSelector(state => getRandomImageUrlAndId(state));
	const id = useTypedSelector(state => getLatestLogId(state));

	useEffect(() => {
		dispatch(loadRandomImage());
	}, [dispatch, isVoted]);

	const onLikeChange = useCallback(
		value => {
			if (image.id) {
				dispatch(addVote({ image_id: image.id, value }));
				setIsVoted(!isVoted);
			}
		},
		[dispatch, image.id, isVoted]
	);

	const onFavourite = useCallback(() => {
		if (!isFavourited && image.id) {
			dispatch(addFavourite({ image_id: image.id }));
		} else if (isFavourited && id) {
			dispatch(deleteFavourite(id));
		}
		setIsFavourited(!isFavourited);
	}, [dispatch, isFavourited, image.id, id]);

	return (
		<>
			<ImageWithSocialActions
				url={image?.url}
				isFavourited={isFavourited}
				onFavourite={onFavourite}
				onLikeChange={onLikeChange}
			/>
		</>
	);
};
