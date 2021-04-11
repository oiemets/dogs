import React from 'react';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

const testBtnClick = (e: React.SyntheticEvent): void => {
  console.log('clicked');
};

export const BtnIcons: React.FC = () => {
  return (
    <div style={{backgroundColor: '#C7C7C7', padding: '20px'}}>
      <Button onClick={testBtnClick}>voting</Button>

      <Button variant='gray'>gray</Button>
      <Button variant='whiteDark'>white dark</Button>
      
      <IconButton icon='smile' />
      <IconButton icon='heart'/>
      <IconButton icon='sad' />

      <IconButton icon='arrowLeft' variant='satin' />
      <IconButton icon='magnifyingGlass' variant='satin' />
      <IconButton icon='close' variant='whiteDark'/>
      <IconButton icon='heart' variant='whiteDark'/>
      <IconButton icon='heartFilled' variant='whiteDark'/>
      <IconButton icon='orderUp' variant='gray'/>
      <IconButton icon='orderDown' variant='gray'/>
    </div>
  );
}

