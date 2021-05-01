import React from 'react';
import styles from './Home.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

export const Home: React.FC = () => {
  return (
    <div className={styleNames('bg')} />
  );
};
