import React from 'react';
import styles from './SocialActions.module.css';
import classNames from 'classnames/bind';
import { IconButton } from '../IconButton/IconButton';

export type SocialActionsProps = {
  onLikeChange: () => void;
  onFavourite: () => void;
  isFavorited?: boolean;
  className?: string;
}

const styleClasses = classNames.bind(styles);

export const SocialActions: React.FC<SocialActionsProps> = ({ 
  onLikeChange, 
  onFavourite, 
  isFavorited = false,
  className 
}) => {
  return (
    <div className={styleClasses('container', className)}>
      <IconButton 
        onClick={onLikeChange} 
        icon='smile' 
        size='L' 
        className={styleClasses('label', 'like')}
      />
      <IconButton 
        onClick={onFavourite}
        icon={isFavorited ? 'heartFilled' : 'heart'} 
        size='L' 
        className={styleClasses('label', 'favourite')}/>
      <IconButton 
        onClick={onLikeChange} 
        icon='sad' 
        size='L' 
        className={styleClasses('label', 'dislike')}
      />
    </div>
  );
};