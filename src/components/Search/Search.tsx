import React, { useCallback } from 'react';
import styles from './Search.module.css';
import bindStyles from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import { SearchBar, IconButton } from '../../components';
import { setSearch, useAppDispatch } from '../../state';
import { useQuery } from '../../hooks';

const styleNames = bindStyles.bind(styles);

export const Search: React.FC = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const query = useQuery();
	const search = query.get('q');

	const onSearch = useCallback(
		inputValue => {
			// history.push('/search');
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
			/>
			<IconButton
				icon='heart'
				variant='white'
				size='M'
				className={styleNames('searchBarIcon')}
			/>
			<IconButton
				icon='sad'
				variant='white'
				size='M'
				className={styleNames('searchBarIcon')}
			/>
		</div>
	);
};
