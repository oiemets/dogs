import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { Carousel } from '../../components';
import { Patch } from '../../assets';
import styles from './Breed.module.css';
import bindStyles from 'classnames/bind';
import {
  useAppDispatch,
  loadImages,
  getImagesWithNames,
  imagesReady,
  getImagesBreedInfo
} from '../../state';
import { IconButton, Button, ButtonLabel } from '../../components';

type Params = { id: string };

const styleNames = bindStyles.bind(styles);

export const Breed: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();

  useEffect(() => {
    dispatch(loadImages(id, '5'));
  }, [dispatch, id]);

  const isLoading = !useTypedSelector(state => imagesReady(state));
  const images = useTypedSelector(state => getImagesWithNames(state));
  const {
    name,
    bred_for,
    height,
    weight,
    temperament,
    life_span
  } = useTypedSelector(state => getImagesBreedInfo(state));

  if (isLoading) {
    return <div style={{ width: 'fit-content' }}>images are loading...</div>
  }

  if (images.length === 0) {
    return <Patch />
  }

  return (
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
            variant='satin'
            labelClassName={styleNames('btn')}
          >
            breeds
          </Button>
        </Link>
        <ButtonLabel
          variant='geraldine'
          labelClassName={styleNames('idLabel')}
        >
          {id}
        </ButtonLabel>
      </div>

      <Carousel
        images={images}
        className={styleNames('carousel')}
      />

      <div className={styleNames('info')}>
        <h1 className={styleNames('title')}>
          {name}
        </h1>
        <h2 className={styleNames('subtitle')}>
          {bred_for}
        </h2>

        <dl className={styleNames('list')}>

          <div className={styleNames('left')}>
            <div className={styleNames('listGroup')}>
              <dt className={styleNames('listTitle')}>
                temperament:
              </dt>
              <dd className={styleNames('listDetails')}>
                {temperament}
              </dd>
            </div>
          </div>


          <div className={styleNames('right')}>
            <div className={styleNames('listGroup')}>
              <dt className={styleNames('listTitle')}>
                height:
              </dt>
              <dd className={styleNames('listDetails')}>
                {height?.metric}
              </dd>
            </div>

            <div className={styleNames('listGroup')}>
              <dt className={styleNames('listTitle')}>
                weight:
              </dt>
              <dd className={styleNames('listDetails')}>
                {weight?.metric}
              </dd>
            </div>

            <div className={styleNames('listGroup')}>
              <dt className={styleNames('listTitle')}>
                life span:
              </dt>
              <dd className={styleNames('listDetails')}>
                {life_span}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div >
  );
};
