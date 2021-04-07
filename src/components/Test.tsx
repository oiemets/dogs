import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import  Grid  from './Grid/Grid';

const Test = () => {
  const { getBreeds } = useActions();
  const { data } = useTypedSelector(state => state.breeds);

  useEffect(() => {
    getBreeds();
  }, []);

  console.log(data);

  return (
    <Grid  breeds={data}/>
  );
};


export default Test;