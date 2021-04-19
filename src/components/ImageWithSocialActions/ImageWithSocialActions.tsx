import React from 'react';
import { SocialActions, SocialActionsProps } from '../SocialActions/SocialActions';
import styles from './ImageWithSocialActions.module.css';
import classNames from 'classnames/bind';


type ImageWithSocialActionsProps = SocialActionsProps & {
  url?: string;
}

const styleClasses = classNames.bind(styles);

export const ImageWithSocialActions: React.FC<ImageWithSocialActionsProps> = ({ 
  url,
  isFavorited,
  onFavourite,
  onLikeChange
 }) => {
  return (
    <div className={styleClasses('container')}>

      <div className={styleClasses('imgContainer')}>
        <img src={url} alt={url} className={styleClasses('img')}/>  
      </div>  

      <div className={styleClasses('actionsContainer')}>
        <SocialActions 
          isFavorited={isFavorited}
          onFavourite={onFavourite}
          onLikeChange={onLikeChange}
        />
      </div>
      
    </div>
  );
};