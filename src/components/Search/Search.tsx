import React, { useCallback, useEffect } from 'react';
import styles from './Search.module.css';
import bindStyles from 'classnames/bind';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchBar, IconButton } from '../../components';
import {
	setSearch,
	useAppDispatch,
	searchBreedByName,
	loadBreeds,
} from '../../state';
import { useQuery } from '../../hooks';

const styleNames = bindStyles.bind(styles);

export const Search: React.FC = () => {
	const { pathname } = useLocation();
	const history = useHistory();
	const dispatch = useAppDispatch();
	const query = useQuery();
	const search = query.get('q');

	useEffect(() => {
		if (search) {
			dispatch(loadBreeds());
			dispatch(searchBreedByName(search));
		}
	}, [dispatch, search]);

	const onSearch = useCallback(
		inputValue => {
			history.push('/search');
			dispatch(setSearch(inputValue));
		},
		[dispatch, history]
	);

	return (
		<div className={styleNames('searchNavBar')}>
			<SearchBar
				className={styleNames('searchBar')}
				onSearch={onSearch}
				value={search ?? ''}
			/>
			<IconButton
				icon='smile'
				variant='white'
				size='M'
				className={styleNames('searchBarIcon')}
				active={pathname === '/likes'}
				linkTo='/likes'
			/>
			<IconButton
				icon='heart'
				variant='white'
				size='M'
				className={styleNames('searchBarIcon')}
				active={pathname === '/favourites'}
				linkTo='/favourites'
			/>
			<IconButton
				icon='sad'
				variant='white'
				size='M'
				className={styleNames('searchBarIcon')}
				active={pathname === '/dislikes'}
				linkTo='/dislikes'
			/>
		</div>
	);
};
