import React from 'react';
import styles from './SearchResults.module.css';
import bindStyles from 'classnames/bind';
import { useTypedSelector, useQuery } from '../../hooks';
import { searchReady, searchDataWithImages } from '../../state';
import { GridView, NavGoBack } from '../../components';

const styleNames = bindStyles.bind(styles);

export const SearchResults: React.FC = () => {
	const query = useQuery();
	const search = query.get('q');

	const isLoading = !useTypedSelector(state => searchReady(state));
	const data = useTypedSelector(state => searchDataWithImages(state));

	return (
		<div
			className={styleNames('root', {
				isLoading: isLoading || data.length === 0 || !search,
			})}>
			<NavGoBack title='Search' />

			{!search || (search && data.length === 0 && !isLoading) ? (
				<div className={styleNames('noItem')}>
					<h3 className={styleNames('noItemTitle')}>No item found</h3>
				</div>
			) : null}

			{search && data.length > 0 && !isLoading ? (
				<h3 className={styleNames('searchResultsTitle')}>
					Search results for <span>{search}</span>:
				</h3>
			) : null}

			{!search ? null : (
				<GridView
					data={data}
					isLoading={isLoading}
					view='search'
					loadingTitle='Searching...'
				/>
			)}
		</div>
	);
};
