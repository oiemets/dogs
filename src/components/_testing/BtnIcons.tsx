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

      <Button onClick={testBtnClick} variant='gray'>gray</Button>
      <Button onClick={testBtnClick} variant='whiteDark'>white dark</Button>
      <Button>test</Button>
      
      <IconButton onClick={testBtnClick} icon='smile'/>
      <IconButton onClick={testBtnClick} icon='heart'/>
      <IconButton onClick={testBtnClick} icon='sad' color="green"/>


      <IconButton onClick={testBtnClick} icon='arrowLeft' variant='satin' />
      <IconButton onClick={testBtnClick} icon='search' variant='satin' />
      <IconButton onClick={testBtnClick} icon='close' variant='whiteDark'/>
      <IconButton onClick={testBtnClick} icon='heart' variant='whiteDark'/>
      <IconButton onClick={testBtnClick} icon='heartFilled' variant='whiteDark'/>
      <IconButton onClick={testBtnClick} icon='orderUp' variant='gray'/>
      <IconButton onClick={testBtnClick} icon='orderDown' variant='gray'/>
    </div>
  );
}

