import React from 'react';
import { Link } from 'react-router-dom';

export const Voting: React.FC = () => {
  return (
    <>
      <h1>!voting!</h1>
      <Link to="/favourites">Favourites</Link>
      <Link to="/likes">Likes</Link>
      <Link to="/dislikes">Dislikes</Link>
    </>
  );
};
