import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import {
  breedsData,
  breedsReady,
  getBreedNames,
  useAppDispatch
} from '../../state';
import {
  Grid,
  ButtonLabel,
  roundedClassName,
  Select,
  IconButton,
  Button,
  SelectValue
} from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { loadBreeds } from '../../state/actions';
import { Patch } from '../../assets';

const styleNames = bindStyles.bind(styles);

const limitSelectOptions = [5, 10, 15, 20].map(n => ({
  value: n,
  text: `Limit: ${n}`
}));

const allBreeds = 'All Breeds';

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
}

// const breedsDescSorter = () => breedsAscSorter.reverse()

// {
//   const r = breedsAscSorter(a, b);

//   if (r > 0) {
//     return r * -1;
//   }

//   if (r < 0) {
//     return Math.abs(r);
//   }

//   return r;
// }

type SortDirection = 'asc' | 'desc';

export const BreedsImages: React.FC = () => {
  const { path } = useRouteMatch();
  const renderItem = getRenderItem(path);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();

  const isLoading = !useTypedSelector(state => breedsReady(state));
  const rawBreeds = useTypedSelector(state => breedsData(state));
  const breedNames = useTypedSelector(state => getBreedNames(state));
  const [selectedBreed, setSelectedBreed] = useState(allBreeds);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState<SortDirection | undefined>();

  /***
   * WHY WE ARE NOT MAKING NEW REQUEST?
   *
  */
  const breeds = useMemo(
    () => {
      let result = [...rawBreeds];

      if (sort) {
        sort === 'asc' ?
          result.sort(breedsAscSorter) :
          result.sort(breedsAscSorter).reverse();
        // result.sort(sort === 'asc' ? breedsAscSorter : breedsDescSorter)
      }

      result = result.splice(0, limit);

      if (selectedBreed !== allBreeds) {
        result = result.filter(({name}) => name === selectedBreed)
      }

      return result;
    },
    [rawBreeds, limit, sort, selectedBreed]
  );

  const onBreedNameChange = useCallback((name: SelectValue) => {
    setSelectedBreed(String(name));
  }, [setSelectedBreed, dispatch])

  const onLimitChange = useCallback((limit: SelectValue) => {
    setLimit(Number(limit))
  }, [setLimit]);

  const onSortChange = useCallback((sort: SortDirection) => {
    setSort(sort)
  }, [setSort]);

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch]);

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
          >
            breeds
          </Button>
        </Link>
        {
          !isLoading ?
            <>
              <Select
                options={[allBreeds, ...breedNames].map(name => ({value: name, text: name}))}
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

