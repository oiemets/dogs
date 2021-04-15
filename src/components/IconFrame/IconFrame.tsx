import React from 'react';
import styles from './IconFrame.module.css';
import classNames from 'classnames/bind';

type IconFrameProps = {
  icon?: JSX.Element;
}

const styleClasses = classNames.bind(styles);

export const IconFrame: React.FC<IconFrameProps> = ({ children }) => {
  console.log(children);
  
  return (
    <span className={styleClasses('frame')}>

    </span>
  );
}