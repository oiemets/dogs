import React from 'react';
import { 
  Switch, 
  Route, 
  Link,
  useLocation
} from 'react-router-dom';
import { 
  Voting, Breeds, Gallery, 
  Home, Favourites, Likes, Dislikes, NotFound 
} from './routing/index';
import { Search } from './routing/Search';


export const TestApp: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h4>{pathname}</h4>

      <Search/>

      <Link to="/"/>
      <Link to="/voting"/>
      <Link to="/breeds"/>
      <Link to="/gallery"/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/voting" component={Voting}/>
        <Route path="/breeds" component={Breeds}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/favourites" component={Favourites}/>
        <Route path="/likes" component={Likes}/>
        <Route path="/dislikes" component={Dislikes}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  );
};