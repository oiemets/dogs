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

	const image = useTypedSelector(state => getRandomImageUrlAndId(state));

	useEffect(() => {
		dispatch(loadRandomImage());
		dispatch(loadVotes());
		dispatch(loadFavourites());
	}, [dispatch]);

	const log = useTypedSelector(state => actionsLog(state));
	const isLogReady = useTypedSelector(state => actionsLogReady(state));

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
		},
		[dispatch, image.id]
	);

	return (
		<div className={styleNames('root')}>
			<NavGoBack title='voting' />
			<>
				<ImageWithSocialActions
					className={styleNames('image')}
					url={image?.url}
					isFavourited={true}
					onFavourite={() => {}}
					onLikeChange={onClick}
				/>
				{isLogReady ? <Log data={log} /> : 'Loading log...'}
			</>
		</div>
	);
};
