import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { breedsData, breedsReady, useAppDispatch } from '../../state';
import { Grid, ButtonLabel, roundedClassName, NoImagePatch } from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { loadBreeds } from '../../state/actions';

const styleNames = bindStyles.bind(styles);

export const BreedsImages: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch]);

  const { path } = useRouteMatch();
  const breeds = useTypedSelector(state => breedsData(state));
  const isLoading = !useTypedSelector(state => breedsReady(state));
  const renderItem = getRenderItem(path);

  return (
    <div className={styleNames('grid')}>
      {
        isLoading ?
          'Loading breeds page...' :
          (
            <Grid
              data={breeds}
              renderItem={renderItem}
            />
          )
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
        <NoImagePatch />
    }
    <ButtonLabel
      labelClassName={styleNames('btn', roundedClassName)}
    >
      {name}
    </ButtonLabel>
  </Link>;

