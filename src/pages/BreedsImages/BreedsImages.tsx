import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Link,
  useRouteMatch,
  useHistory,
  useLocation
} from 'react-router-dom';
import { useTypedSelector, useQuery } from '../../hooks';
import {
  breedsData,
  breedsReady,
  getBreedNamesWithId,
  useAppDispatch
} from '../../state';
import {
  Grid,
  ButtonLabel,
  roundedClassName,
  Select,
  IconButton,
  Button
} from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { loadBreeds } from '../../state/actions';
import { Patch } from '../../assets';

const styleNames = bindStyles.bind(styles);

const limitPresets = [5, 10, 15, 20];

const limitSelectOptions = limitPresets.map(n => ({
  value: n,
  text: `Limit: ${n}`
}));

const isLimitPreset = (n: number) => limitPresets.includes(n);

const allBreeds = {value: '', name: 'All breeds'};

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

type LimitPresets = typeof limitPresets[number];

export const BreedsImages: React.FC = () => {
  const { path } = useRouteMatch();
  const renderItem = getRenderItem(path);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();
  const { pathname } = useLocation();
  const query = useQuery();

  const isLoading = !useTypedSelector(state => breedsReady(state));
  const rawBreeds = useTypedSelector(state => breedsData(state));
  const breedNames = useTypedSelector(state => getBreedNamesWithId(state));
  const [selectedBreed, setSelectedBreed] = useState('');
  const [limit, setLimit] = useState<LimitPresets>(10);
  const [sort, setSort] = useState<SortDirection | undefined>();

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch]);

  useEffect(() => {
    const queryLimit = Number(query.get('limit'));

    if (isLimitPreset(queryLimit)) {
      setLimit(queryLimit)
    }

  }, []);

  useEffect(() => {
    history.push({
      pathname,
      search: `?limit=${limit}`
    });
  }, [limit]);

  const breeds = useMemo(
    () => {
      let result = [...rawBreeds];

      if (sort) {
        sort === 'asc' ?
          result.sort(breedsAscSorter) :
          result.sort(breedsAscSorter).reverse();
      }

      result = result.splice(0, limit);

      return result;
    },
    [rawBreeds, limit, sort]
  );

  const onBreedNameChange = useCallback(({ value, text }) => {
    setSelectedBreed(text);
    history.push(`${path}/${value}`)
  }, [history, path]);


  const onLimitChange = useCallback(({value}) => {
    setLimit(Number(value));
  }, [setLimit]);

  const onSortChange = useCallback((sort: SortDirection) => {
    setSort(sort)
  }, [setSort]);

  return (
    <div className={styleNames('root', { 'isLoading': isLoading })}>
      <div className={styleNames('nav')}>
        <IconButton
          icon='arrowLeft'
          variant='satin'
          onClick={historyGoBack}
          className={styleNames('icon')}
        />
        <Link
          to={'/breeds'}
          className={styleNames('linkBtn')}
        >
          <Button
            variant='geraldine'
            labelClassName={styleNames('navBtn')}
            active={path === '/breeds'}
          >
            breeds
          </Button>
        </Link>
        {
          !isLoading ?
            <>
              <Select
                options={[allBreeds, ...breedNames].map(name => ({
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
                  active={sort === 'asc'}
                  className={styleNames('orderBtn')}
                  onClick={() => onSortChange('asc')}
                />
                <IconButton
                  icon='desc'
                  variant='gray'
                  active={sort === 'desc'}
                  className={styleNames('orderBtn')}
                  onClick={() => onSortChange('desc')}
                />
              </div>
            </> :
            null
        }
      </div>

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
  );
};

const getRenderItem = (path: string) => ({ id, name, image }: Breed) =>
  <Link
    to={`${path}/${id}`}
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
  </Link>;

