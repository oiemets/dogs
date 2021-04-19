import React from 'react';
import styles from './SocialActions.module.css';
import classNames from 'classnames/bind';
import { IconButton } from '../IconButton/IconButton';

export type SocialActionsProps = {
  isFavorited?: boolean;
  onLikeChange: () => void;
  onFavourite: () => void;
}

const styleClasses = classNames.bind(styles);

export const SocialActions: React.FC<SocialActionsProps> = ({ 
  onLikeChange, 
  onFavourite, 
  isFavorited = false 
}) => {
  return (
    <div className={styleClasses('container')}>
      <IconButton onClick={onLikeChange} icon='smile' size='L' className={styleClasses('like')}/>
      <IconButton icon='heart' size='L' className={styleClasses('favourite', {isFavorited})}/>
      <IconButton onClick={onFavourite} icon='sad' size='L' className={styleClasses('dislike')}/>
    </div>
  );
};