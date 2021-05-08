import React, { useCallback, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import styles from './Search.module.css';
import bindStyles from 'classnames/bind';
import { setSearch, useAppDispatch  } from '../../state';

const styleNames = bindStyles.bind(styles);

const placeholder = 'Search for breeds by name';

type SearchProps = {
  className?: string;
};

export const Search: React.FC<SearchProps> = ({
  className
}) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const onSearchClick = useCallback(() => {
    if (inputValue !== '') {
      dispatch(setSearch(inputValue))
      setInputValue('');
    }
  }, [dispatch, inputValue]);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchClick();
    };
  };

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
        onKeyUp={onKeyUp}
      />
      <IconButton
        onClick={onSearchClick}
        icon='search'
        variant='satin'
        className={styleNames('icon')}
      />
    </div>
  );
};


