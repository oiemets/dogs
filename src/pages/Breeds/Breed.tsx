import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { useAppDispatch, loadImages, getImagesWithNames, imagesReady } from '../../state';
import { Carousel } from '../../components';

type Params = { id: string };

export const Breed: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadImages(id, '5'));
  }, [dispatch, id]);

  const isLoading = !useTypedSelector(state => imagesReady(state));
  const images = useTypedSelector(state => getImagesWithNames(state));

  if (isLoading) {
    return <>images are loading...</>
  }

  if (images.length === 0) {
    return <span>no-image</span>
  }

  return (
    <>
      <h3>Breed ID: {id}</h3>
      <Carousel images={images} />
    </>
  );
};
