import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { getBreedsImagesWithIdAndName, breedsReady } from '../../state';
import { Grid, ButtonLabel, Button } from '../../components';
import classNames from 'classnames/bind';
import styles from './BreedsImages.module.css';

type RenderBreedsProps = {
  id: number;
  img: string; 
  name: string;
}

const classnames = classNames.bind(styles);

export const BreedsImages: React.FC = () => {
  const { path } = useRouteMatch();
  const breedsImages = useTypedSelector(state => getBreedsImagesWithIdAndName(state));
  const isLoading = !useTypedSelector(state => breedsReady(state));
  
  const renderBreedsImages = ({ id, img, name }: RenderBreedsProps) => 
    <Link to={`${path}/${id}`} key={id} className={classnames('link')}>
      <ButtonLabel
        beforeLabel={
          <img src={img} alt='breed' className={classnames('img')}/>
        }
        className={classnames('root')}
        labelClassName={classnames('label')}
      >
      </ButtonLabel>
      <Button className={classnames('btn')}>{name}</Button>
    </Link>
  
  return (
    <div className={classnames('grid')}>
      {
        isLoading 
        ? 
        'Loading breeds page...' 
        :
        <Grid data={breedsImages} renderItem={renderBreedsImages}/>
      }
    </div>
  );
};