import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import {
  Home,
  Voting,
  Breeds,
  Gallery,
  Favourites,
  Likes,
  Dislikes,
  NotFound
} from './pages';

function App() {
  const { pathname } = useLocation();
  return (
    <div className='root'>
      <h4>{pathname}</h4>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/voting" component={Voting} />
        <Route path="/breeds" component={Breeds} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/likes" component={Likes} />
        <Route path="/dislikes" component={Dislikes} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;