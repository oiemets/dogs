import React from 'react';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { IconFrame } from '../IconFrame/IconFrame';

const testBtnClick = (e: React.SyntheticEvent): void => {
  console.log('clicked');
};

export const BtnIcons: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#C7C7C7', 
      padding: '20px',
      width: '1000px',
      margin: '0 auto',
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

    <IconFrame title='voting' icon='voteTable' onClick={testBtnClick}/>
    <IconFrame title='breeds' icon='petBreeds' onClick={testBtnClick}/>
    <IconFrame title='gallery' icon='imagesSearch' onClick={testBtnClick}/>

    <Button>button</Button>
    <IconButton icon='heartFilled'/>
    <IconButton icon='heart' />
    <IconButton icon='orderUp' variant='gray'/>
    <IconButton icon='heart' variant='satin'/>

      

    </div>
  );
}

