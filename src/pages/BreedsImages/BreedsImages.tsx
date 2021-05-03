import React, { useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { breedsData, breedsReady, useAppDispatch } from '../../state';
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

export const BreedsImages: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch]);

  const { path } = useRouteMatch();
  const breeds = useTypedSelector(state => breedsData(state));
  const isLoading = !useTypedSelector(state => breedsReady(state));
  const renderItem = getRenderItem(path);

  return (
    <>
      {
        isLoading ?
          'Loading breeds page...' :
          (
            <div className={styleNames('root')}>

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

                <Select
                  option={[
                    { value: 'aha', text: 'uhu' },
                    { value: 'kaneshna', text: 'kaneshna da' }
                  ]}
                  defaultOpt='All breeds'
                  className={styleNames('breedSelect')}
                />

                <div className={styleNames('navRight')}>
                  <Select
                    option={[
                      { value: 'aha', text: 'uhu' },
                      { value: 'kaneshna', text: 'kaneshna da' }
                    ]}
                    defaultOpt='Limit: 10'
                  />
                  <IconButton
                    icon='orderUp'
                    variant='gray'
                    className={styleNames('orderBtn')}
                  />
                  <IconButton
                    icon='orderDown'
                    variant='gray'
                    className={styleNames('orderBtn')}
                  />
                </div>

              </div>



              <div className={styleNames('grid')}>
                <Grid
                  data={breeds}
                  renderItem={renderItem}
                />
              </div>
            </div>
          )
      }
    </>
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

