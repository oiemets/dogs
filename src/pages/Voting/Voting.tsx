import React, { useCallback, useEffect, useState } from 'react';
import { ImageWithSocialActions, NavGoBack, Log } from '../../components';
import {
	useAppDispatch,
	loadRandomImage,
	getRandomImageUrlAndId,
	addFavourite,
	deleteFavourite,
	addVote,
	imagesReady,
	loadVotes,
	loadFavourites,
	actionsLog,
	actionsLogReady,
} from '../../state';
import { useTypedSelector } from '../../hooks';
import bindStyles from 'classnames/bind';
import styles from './Voting.module.css';

const styleNames = bindStyles.bind(styles);

export const Voting: React.FC = () => {
	const dispatch = useAppDispatch();

	// const [isFavourited, setIsFavourited] = useState(false);
	// const [isVoted, setIsVoted] = useState(false);

	// const isLoading = !useTypedSelector(state => imagesReady(state));
	const image = useTypedSelector(state => getRandomImageUrlAndId(state));
	// const id = useTypedSelector(state => getLatestLogId(state));

	useEffect(() => {
		dispatch(loadRandomImage());
		dispatch(loadVotes());
		dispatch(loadFavourites());
	}, [dispatch]);

	const log = useTypedSelector(state => actionsLog(state));
	const isLogReady = useTypedSelector(state => actionsLogReady(state));

	// const onLikeChange = useCallback(
	// 	value => {
	// 		if (image.id) {
	// 			dispatch(addVote({ image_id: image.id, value }));
	// 			setIsVoted(!isVoted);
	// 		}
	// 	},
	// 	[dispatch, image.id, isVoted]
	// );

	// const onFavourite = useCallback(() => {
	// 	if (!isFavourited && image.id) {
	// 		dispatch(addFavourite({ image_id: image.id }));
	// 	} else if (isFavourited && id && image.id) {
	// 		dispatch(deleteFavourite(id, image.id));
	// 	}
	// 	setIsFavourited(!isFavourited);
	// }, [dispatch, isFavourited, image.id, id]);

	return (
		<div className={styleNames('root')}>
			<NavGoBack title='voting' />
			<>
				<ImageWithSocialActions
					className={styleNames('image')}
					url={image?.url}
					isFavourited={true}
					onFavourite={() => {}}
					onLikeChange={() => {}}
				/>
				{isLogReady ? <Log data={log} /> : 'Loading log...'}
			</>
		</div>
	);
};
