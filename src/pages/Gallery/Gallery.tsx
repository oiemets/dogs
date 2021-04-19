import React from 'react';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import { Upload } from '../Upload/Upload';

export const Gallery: React.FC = () => {
  const match = useRouteMatch();
  return (
    <>
      <h1>!gallery!</h1>
        <Link to={`${match.url}/upload`}>Upload</Link>

        <Switch>
            <Route path={`${match.path}/upload`} component={Upload}/>
        </Switch>
    </>
  );
};