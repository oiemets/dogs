import React from 'react';
import { 
  Switch, 
  Route,
  useRouteMatch
} from 'react-router-dom';
import { Breed } from '../routing/Breed'; 


export const Breeds: React.FC = () => {
  const match = useRouteMatch();
  return (
    <>
      <h1>!breeds!</h1>
      <Switch>
        <Route path={`${match.path}/:id`} component={Breed}/>
      </Switch>
    </>
  );
};