import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { Carousel, NoImagePatch } from '../../components';
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
    return <NoImagePatch />
  }

  return (
    <div
      className={styleNames('root')}
    >
      <div className={styleNames('nav')}>
        <IconButton
          icon='arrowLeft'
          variant='satin'
          onClick={historyGoBack}
          className={styleNames('iconArrow')}
        />
        <Link
          to={'/breeds'}
          className={styleNames('btnLink')}
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
        <dl
          className={styleNames('descList')}
        >
          <div
            className={styleNames('temperament')}
          >
            <div
              className={styleNames('descListItem')}
            >
              <dt
                className={styleNames('descTitle')}
              >
                temperament:
              </dt>
              <dd
                className={styleNames('descDetails')}
              >
                {temperament}
              </dd>
            </div>
          </div>
          <div
            className={styleNames('measurements')}
          >
            <div
              className={styleNames('descListItem')}
            >
              <dt
                className={styleNames('descTitle')}
              >
                height:
              </dt>
              <dd
                className={styleNames('descDetails')}
              >
                {height?.metric}
              </dd>
            </div>
            <div
              className={styleNames('descListItem')}
            >
              <dt
                className={styleNames('descTitle')}
              >
                weight:
            </dt>
              <dd
                className={styleNames('descDetails')}
              >
                {weight?.metric}
              </dd>
            </div>
            <div
              className={styleNames('descListItem')}
            >
              <dt
                className={styleNames('descTitle')}
              >
                life span:
              </dt>
              <dd
                className={styleNames('descDetails')}
              >
                {life_span}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div >
  );
};
