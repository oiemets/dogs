import React, { useCallback, useEffect, useState } from 'react';
import { ImageWithSocialActions, NavGoBack, Log } from '../../components';
import {
	useAppDispatch,
	loadRandomImage,
	getRandomImageUrlAndId,
	addFavourite,
	deleteFavourite,
	addVote,
	loadVotes,
	loadFavourites,
	actionsLog,
	actionsLogReady,
} from '../../state';
import { useTypedSelector } from '../../hooks';
import bindStyles from 'classnames/bind';
import styles from './Voting.module.css';
import { isoToTimestamp } from '../../utils';

const styleNames = bindStyles.bind(styles);

export const Voting: React.FC = () => {
	const dispatch = useAppDispatch();
	const [isFavourited, setIsFavourited] = useState(false);

	useEffect(() => {
		dispatch(loadRandomImage());
		dispatch(loadVotes());
		dispatch(loadFavourites());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const log = useTypedSelector(state => actionsLog(state)).sort(
		(a, b) => isoToTimestamp(b.created_at) - isoToTimestamp(a.created_at)
	);
	const isLogReady = useTypedSelector(state => actionsLogReady(state));
	const image = useTypedSelector(state => getRandomImageUrlAndId(state));
	const favourited = log.find(l => l.image_id === image.id);

	const onClick = useCallback(
		value => {
			if (image.id) {
				dispatch(
					addVote({
						image_id: image.id,
						value,
					})
				);
			}
			dispatch(loadRandomImage());
			dispatch(loadVotes());
		},
		[dispatch, image.id]
	);

	const onFavourite = useCallback(() => {
		if (image.id && !isFavourited) {
			dispatch(addFavourite({ image_id: image.id }));
		}
		if (image.id && isFavourited && favourited) {
			dispatch(deleteFavourite(favourited.id));
		}
		setIsFavourited(!isFavourited);
		dispatch(loadFavourites());
	}, [dispatch, image.id, isFavourited, favourited]);

	return (
		<div className={styleNames('root')}>
			<NavGoBack title='voting' />
			<>
				<ImageWithSocialActions
					className={styleNames('image')}
					url={image?.url}
					isFavourited={isFavourited}
					onFavourite={onFavourite}
					onLikeChange={onClick}
				/>
				{isLogReady ? <Log data={log} /> : 'Loading log...'}
			</>
		</div>
	);
};
