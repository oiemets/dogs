import React, { useRef } from 'react';
import styles from './IconFrame.module.css';
import classNames from 'classnames/bind';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type IconFrameProps = {
  icon?: React.ComponentProps<any>;
  button?: React.ComponentProps<any>;
  onClick?: (e: React.SyntheticEvent) => void;
}

const styleClasses = classNames.bind(styles);

export const IconFrame: React.FC<IconFrameProps> = ({ icon, button, onClick }) => {

  const iconRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLInputElement>(null);

  useOutsideClick(iconRef, () => {
    console.log('icon');
  });
  useOutsideClick(btnRef, () => {
    console.log('btn');
  });


  const Icon = icon;
  const Btn = button;
  return (
    <span className={styleClasses('frame')} onClick={onClick}>

      <span ref={iconRef}>
          <Icon variant='purpleBlue' className={styleClasses('icon')}/>
      </span>

      <span ref={btnRef}>
          <Btn className={styleClasses('btn')}>voting</Btn>
      </span>
      
    </span>
  );
}