import React from 'react';
import { IconFrame } from '../../components';
import bindStyles from 'classnames/bind';
import styles from './Menu.module.css';
import { useLocation } from 'react-router-dom';

const styleNames = bindStyles.bind(styles);

type MenuProps = { className?: string }

export const Menu: React.FC<MenuProps> = ({ className }) => {
  const { pathname } = useLocation();
  return (
    <div className={styleNames('root', className)}>

      <h3 className={styleNames('title')}>
        Lets start using The Dogs API
      </h3>

      <ul className={styleNames('body')}>
        <li className={styleNames('item')}>
          <IconFrame target='voting' active={pathname === '/voting'} />
        </li>
        <li className={styleNames('item')}>
          <IconFrame target='breeds' active={pathname === '/breeds'} />
        </li>
        <li className={styleNames('item')}>
          <IconFrame target='gallery' active={pathname === '/gallery'} />
        </li>
      </ul>
    </div>
  );
};
