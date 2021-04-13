import { useEffect } from 'react';
import { useTypedSelector, useActions } from '../../hooks';

export const GetData = () => {
  const { getBreeds } = useActions();
  const { data } = useTypedSelector(state => state.breeds);
  useEffect(() => {
    getBreeds();
  }, []);

  console.log(data);
  
  return (
    <>

    </>
  );
};
