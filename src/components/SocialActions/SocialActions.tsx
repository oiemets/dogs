import React from 'react';
import styles from './SocialActions.module.css';
import bindStyles from 'classnames/bind';
import { IconButton } from '../IconButton/IconButton';

export type SocialActionsProps = {
  onLikeChange: () => void;
  onFavourite: () => void;
  isFavorited?: boolean;
  className?: string;
}

const styleNames = bindStyles.bind(styles);

export const SocialActions: React.FC<SocialActionsProps> = ({
  onLikeChange,
  onFavourite,
  isFavorited = false,
  className
}) => {
  return (
    <div className={styleNames('container', className)}>
      <IconButton
        onClick={onLikeChange}
        icon='smile'
        size='L'
        className={styleNames('label', 'like')}
      />
      <IconButton
        onClick={onFavourite}
        icon={isFavorited ? 'heartFilled' : 'heart'}
        size='L'
        className={styleNames('label', 'favourite')} />
      <IconButton
        onClick={onLikeChange}
        icon='sad'
        size='L'
        className={styleNames('label', 'dislike')}
      />
    </div>
  );
};