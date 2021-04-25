import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Breed } from './Breed';
import { BreedsImages } from './BreedsImages';

export const Breeds: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <h1>BREEDS</h1>
      <Switch>
        <Route
          exact path={path}
          component={BreedsImages}
        />
        <Route
          path={`${path}/:id`}
          component={Breed}
        />
      </Switch>
    </>
  );
};
