import React from 'react';
import styles from './IconFrame.module.css';
import classNames from 'classnames/bind';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';
import { Button } from '../Button/Button';
import { ImagesSearch, VoteTable, PetBreeds } from '../../assets';

type IconFrameProps = {
  icon: keyof typeof iconsMap;
  title?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

const styleClasses = classNames.bind(styles);

const iconsMap = {
  imagesSearch: ImagesSearch,
  voteTable: VoteTable,
  petBreeds: PetBreeds
};

export const IconFrame: React.FC<IconFrameProps> = ({ 
    onClick, 
    title, 
    icon 
  }) => {
  
  const Icon = iconsMap[icon];

  return (
    <span className={styleClasses('frame')} onClick={onClick}>

      <ButtonLabel 
        className={styleClasses('icon')} 
        variant='purpleBlue'>
        <Icon/>
      </ButtonLabel>

      <Button className={styleClasses('btn')}>{title}</Button>
      
    </span>
  );
};