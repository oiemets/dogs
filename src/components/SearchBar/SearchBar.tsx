import React, { useCallback, useState, useEffect } from 'react';
import { IconButton } from '../IconButton/IconButton';
import styles from './SearchBar.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

const placeholder = 'Search for breeds by name';

type SearchProps = {
	className?: string;
	onSearch?: (query: string) => void;
	value?: string;
};

export const SearchBar: React.FC<SearchProps> = ({
	className,
	onSearch,
	value = '',
}) => {
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	const onClick = useCallback(() => {
		if (inputValue !== '') {
			onSearch?.(inputValue);
		}
	}, [onSearch, inputValue]);

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (inputValue !== '' && e.key === 'Enter') {
				onSearch?.(inputValue);
			}
		},
		[onSearch, inputValue]
	);

	const onChange = useCallback(e => {
		const value = e.target.value;
		setInputValue(value);
	}, []);

	return (
		<div className={styleNames('root', className)}>
			<input
				value={inputValue}
				onChange={onChange}
				className={styleNames('search')}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
			/>
			<IconButton
				onClick={onClick}
				icon='search'
				variant='satin'
				className={styleNames('icon')}
			/>
		</div>
	);
};
