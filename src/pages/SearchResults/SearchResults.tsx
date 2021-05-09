import React from 'react';
import styles from './SearchResults.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

export const SearchResults: React.FC = () => {
	return <div className={styleNames('root')}>SEARCH RESULTS</div>;
};
