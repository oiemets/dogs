import styles from './App.module.css';
import bindStyles from 'classnames/bind';
import { Switch, Route } from 'react-router-dom';
import { Menu } from './components';
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

const styleNames = bindStyles.bind(styles);

function App() {
  return (
    <div className={styleNames('app')}>
      <div
        className={styleNames('menu')}
      >
        <Menu />
      </div>
      <div
        className={styleNames('pages')}
      >
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
    </div>
  );
}

export default App;
