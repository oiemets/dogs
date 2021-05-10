import React, { useCallback, useEffect } from 'react';
import styles from './AppBar.module.css';
import bindStyles from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { SearchBar, IconButton } from '..';
import {
	setSearchQuery,
	useAppDispatch,
	searchBreedByName,
	loadBreeds,
} from '../../state';
import { useQuery } from '../../hooks';

const styleNames = bindStyles.bind(styles);

export const AppBar: React.FC = () => {
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const query = useQuery();
	const search = query.get('q');

	useEffect(() => {
		const searchQuery = query.get('q');
		if (searchQuery) {
			dispatch(loadBreeds());
			dispatch(searchBreedByName(searchQuery));
		}
	}, [dispatch, query]);

	const onSearch = useCallback(
		inputValue => {
			dispatch(setSearchQuery(inputValue, '/search'));
		},
		[dispatch]
	);

	return (
		<div className={styleNames('appBar')}>
			<SearchBar
				className={styleNames('search')}
				onSearch={onSearch}
				value={search ?? ''}
			/>
			<IconButton
				icon='smile'
				variant='white'
				size='M'
				className={styleNames('icon')}
				active={pathname === '/likes'}
				linkTo='/likes'
			/>
			<IconButton
				icon='heart'
				variant='white'
				size='M'
				className={styleNames('icon')}
				active={pathname === '/favourites'}
				linkTo='/favourites'
			/>
			<IconButton
				icon='sad'
				variant='white'
				size='M'
				className={styleNames('icon')}
				active={pathname === '/dislikes'}
				linkTo='/dislikes'
			/>
		</div>
	);
};
