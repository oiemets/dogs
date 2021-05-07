import React from 'react';
import bindStyles from 'classnames/bind';
import styles from './Header.module.css';

const styleNames = bindStyles.bind(styles);


export const Header: React.FC = () => {
  return (
    <header className={styleNames('header')}>
      <h1 className={styleNames('title')}>Hi intern!</h1>
      <h2 className={styleNames('subtitle')}>Welcome to MSI 2021 Front-end test</h2>
    </header>
  );
};
