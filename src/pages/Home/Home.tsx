import React from 'react';
import { IconFrame } from '../../components';

export const Home: React.FC = () => {
  return (
    <>
      <h1>HOME</h1>
      <IconFrame target='voting'/>
      <IconFrame target='breeds'/>
      <IconFrame target='gallery'/>
    </>
  );
};