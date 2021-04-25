import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import { useAppDispatch, loadImages, getImages, imagesReady } from '../../state';

type Params = { id: string };

export const Breed: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadImages(id, '7'));
  }, [dispatch, id]);

  const isLoading = !useTypedSelector(state => imagesReady(state));
  const images = useTypedSelector(state => getImages(state));

  return (
    <>
      <h3>Breed ID: {id}</h3>
      {
        isLoading ?
          'images are loading...' :
          images.map(i => <img src={i} alt={`${i} Breed`} key={i} />)
      }
    </>
  );
};
