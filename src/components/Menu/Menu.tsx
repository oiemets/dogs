import React from 'react';
import { IconFrame } from '../../components';
import { Logo } from '../../assets';
import bindStyles from 'classnames/bind';
import styles from './Menu.module.css';
import { useLocation } from 'react-router-dom';

const styleNames = bindStyles.bind(styles);

type MenuProps = { className?: string }

export const Menu: React.FC<MenuProps> = ({ className }) => {
  const { pathname } = useLocation();
  return (
    <div className={styleNames('root', className)}>
      <Logo className={styleNames('logo')} />
      <h1
        className={styleNames('title')}
      >
        Hi intern!
      </h1>
      <h2
        className={styleNames('subtitle')}
      >
        Welcome to MSI 2021 Front-end test
        </h2>
      <h3
        className={styleNames('banner')}
      >
        Lets start using The Dogs API
        </h3>
      <div className={styleNames('nav')}>
        <IconFrame target='voting' active={pathname === '/voting'} />
        <IconFrame target='breeds' active={pathname === '/breeds'} />
        <IconFrame target='gallery' active={pathname === '/gallery'} />
      </div>
    </div>
  );
}
