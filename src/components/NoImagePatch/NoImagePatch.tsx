import React from 'react';
import { Patch } from '../../assets';
import styles from './NoImagePatch.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

export const NoImagePatch: React.FC = () => {
  return (
    <div
      className={styleNames('root')}
    >
      <Patch />
    </div>
  );
}
