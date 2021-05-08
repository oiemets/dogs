import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';
import { useTypedSelector, useQuery } from '../../hooks';
import {
  breedsData,
  breedsReady,
  getBreedNamesWithId,
  useAppDispatch,
  loadBreeds,
  searchBreedByName,
  setLimit,
  setSortingOrder
} from '../../state';
import {
  Grid,
  ButtonLabel,
  roundedClassName,
  Select,
  SelectBreed,
  IconButton,
  Button,
  Search
} from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { Patch } from '../../assets';
import { ensureLeadingSlash } from '../../utils';

const styleNames = bindStyles.bind(styles);

const LIMIT_PRESETS = [5, 10, 15, 20] as const;
const DEFAULT_LIMIT = LIMIT_PRESETS[1];
const limitSelectOptions = LIMIT_PRESETS.map(n => ({
  value: n,
  text: `Limit: ${n}`
}));

const ALL_BREEDS = {value: '', name: 'All breeds'} as const;

const breedsAscSorter = (a: Breed, b: Breed) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

type SortDirection = 'asc' | 'desc';

export const BreedsImages: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();

  const isLoading = !useTypedSelector(state => breedsReady(state));
  const rawBreeds = useTypedSelector(state => breedsData(state));
  const breedNames = useTypedSelector(state => getBreedNamesWithId(state));
  const [selectedBreed, setSelectedBreed] = useState('');

  const query = useQuery();
  const limit = Number(query.get('limit')) || DEFAULT_LIMIT;
  const order = query.get('order');
  const search = query.get('q');

  useEffect(() => {
    if (search) {
      dispatch(searchBreedByName(search))
    } else {
      dispatch(loadBreeds());
    }
  }, [dispatch, search]);

  const breeds = useMemo(
    () => {
      let result = [...rawBreeds];

      if (order) {
        order === 'asc' ?
          result.sort(breedsAscSorter) :
          result.sort(breedsAscSorter).reverse();
      }

      result = result.splice(0, limit);

      return result;
    },
    [rawBreeds, order, limit]
  );

  const onBreedNameChange = useCallback(({ value, text }: SelectBreed) => {
    setSelectedBreed(text);
    history.push(`${ensureLeadingSlash(history.location.pathname)}${value}`)
  }, [history]);


  const onLimitChange = useCallback(({value}) => {
    dispatch(setLimit(value));
  }, [dispatch]);

  const onSortChange = useCallback((sort: SortDirection) => {
    dispatch(setSortingOrder(sort));
  }, [dispatch]);

  const onIconClick = useCallback((link: string) => {
    history.push(link);
  }, [history]);

  return (
    <>
      <div className={styleNames('searchNavBar')}>
        <Search className={styleNames('searchBar')}/>
        <IconButton icon='smile' variant='white' size='M' className={styleNames('searchBarIcon')} onClick={() => onIconClick('/likes')}/>
        <IconButton icon='heart' variant='white' size='M' className={styleNames('searchBarIcon')} onClick={() => onIconClick('/favourites')}/>
        <IconButton icon='sad' variant='white' size='M' className={styleNames('searchBarIcon')} onClick={() => onIconClick('/dislikes')}/>
      </div>
      <div className={styleNames('root', { 'isLoading': isLoading })}>
        <div className={styleNames('nav')}>
          <IconButton
          icon='arrowLeft'
          variant='satin'
          onClick={historyGoBack}
          className={styleNames('icon')}
          />
          <Button
            variant='geraldine'
            labelClassName={styleNames('navBtn')}
            active
          >
            breeds
          </Button>
          {
            !isLoading && !search ?
              <div className={styleNames('right')}>
                <Select
                  options={[ALL_BREEDS, ...breedNames].map(name => ({
                    value: name.value,
                    text: name.name
                  }))}
                  value={selectedBreed}
                  className={styleNames('breedSelect')}
                  onChange={onBreedNameChange}
                />

                <div className={styleNames('navRight')}>
                  <Select
                    options={limitSelectOptions}
                    value={limit}
                    onChange={onLimitChange}
                  />
                  <IconButton
                    icon='asc'
                    variant='gray'
                    active={order === 'asc'}
                    className={styleNames('orderBtn')}
                    onClick={() => onSortChange('asc')}
                  />
                  <IconButton
                    icon='desc'
                    variant='gray'
                    active={order === 'desc'}
                    className={styleNames('orderBtn')}
                    onClick={() => onSortChange('desc')}
                  />
                </div>
              </div> :
            null
          }
        </div>
        {
          search && rawBreeds.length === 0 ?
            <div className={styleNames('noItem')}>
              <h3 className={styleNames('noItemTitle')}>
                No item found
              </h3>
            </div> :
          null
        }
        {
          search && rawBreeds.length > 0 ?
            <h3 className={styleNames('searchResultsTitle')}>
              Search results for <span>{search}</span>:
            </h3> :
            null
        }
      {
        isLoading ?
          <h3 className={styleNames('loadingTitle')}>
            Loading breeds page...
          </h3> :
          <div className={styleNames('grid')}>
            <Grid
              data={breeds}
              renderItem={renderItem}
            />
          </div>
      }
      </div>
    </>
  );
};

const renderItem = ({ id, name, image }: Breed) => (
  <Link
    to={location => ({
      ...location,
      search: '',
      pathname: `${ensureLeadingSlash(location.pathname)}${id}`
    })}
    className={styleNames('link')}
    key={id}
  >
    {
      image ?
        <img
          src={`${image.url}`}
          alt={`${name} Breed`}
          className={styleNames('img')}
        /> :
        <Patch />
    }
    <ButtonLabel
      labelClassName={styleNames('btn', roundedClassName)}
    >
      {name}
    </ButtonLabel>
  </Link>
);

