import { useEffect } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, Voting, Breeds, Gallery, Favourites, Likes, Dislikes, NotFound } from './pages';
import { IconFrame, ImageWithSocialActions } from './components';
import { useAppDispatch } from './state';
import { loadBreeds } from './state/actions';

import photo from './assets/images/photo.jpeg';
import photo1 from './assets/images/photo1.jpg';


function App() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch])

  return (
    <div className='root'>
      <h4>{pathname}</h4>

      <IconFrame target='voting'/>
      <IconFrame target='breeds'/>
      <IconFrame target='gallery'/>

      <ImageWithSocialActions
        url={photo1}
        onLikeChange={() => console.log('onLikeChanged')}
        onFavourite={() => console.log('onFavouriteChanged')}
      />

      <ImageWithSocialActions
        isFavorited
        url={photo}
        onLikeChange={() => console.log('onLikeChanged')}
        onFavourite={() => console.log('onFavouriteChanged')}
      />

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
    </div>
  );
}

export default App;