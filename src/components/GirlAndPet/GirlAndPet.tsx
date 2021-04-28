import React from 'react';
import girlAndPet from './girlAndPet.png';
import bindStyles from 'classnames/bind';
import styles from './GirlAndPet.module.css';

const styleNames = bindStyles.bind(styles);

export const GirlAndPet: React.FC = () => {
  return (
    <div className={styleNames('root')}>
      <div className={styleNames('bg')}></div>
      <img
        src={girlAndPet}
        alt='Girl and pet'
        className={styleNames('img')}
      />
    </div>
  );
};
