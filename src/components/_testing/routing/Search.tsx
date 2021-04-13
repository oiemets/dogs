import React, { useCallback } from 'react';
import { useQuery } from '../../../hooks';
import { useHistory, useLocation } from 'react-router-dom';
import { IconButton } from '../../IconButton/IconButton';


export const Search: React.FC = () => {
  const query = useQuery();
  const { pathname } = useLocation();
  const history = useHistory();

  const onSearch = useCallback(() => {
    console.log('search ' + query.get('q'));
  }, [query]);

  const onChange = useCallback(e => {
    history.push({
      pathname,
      search: `?q=${e.target.value}`
    });
  }, [history, pathname]);

  return (
    <div>
      <input value={query.get('q') ?? ''} onChange={onChange}/>
      <IconButton onClick={onSearch} icon='search' />
    </div>
  );
};


