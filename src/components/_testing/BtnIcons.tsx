import React from 'react';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';
import { IconFrame } from '../IconFrame/IconFrame';
import { ImagesSearch, PetBreeds, VoteTable } from '../../assets';
// import styles from './test.module.css';

// const testBtnClick = (e: React.SyntheticEvent): void => {
//   console.log('clicked');
// };

export const BtnIcons: React.FC = () => {
  return (
    <div style={{backgroundColor: '#C7C7C7', padding: '20px'}}>

      

      
      <Button>voting</Button>
      <Button variant='satin'>upload photo</Button>

      <IconButton icon='heart'/>
      <IconButton icon='arrowLeft'/>
      <IconButton icon='error'/>
      <IconButton icon='heartFilled'/>

      <IconButton icon='orderDown' variant='gray'/>
      <IconButton icon='orderUp' variant='gray'/>

      <ButtonLabel variant='purpleBlue'>
        <PetBreeds/>
      </ButtonLabel>

      <ButtonLabel variant='purpleBlue'>
        <VoteTable/>
      </ButtonLabel>

      <ButtonLabel variant='purpleBlue'>
        <ImagesSearch/>
      </ButtonLabel>
      

    </div>
  );
}

