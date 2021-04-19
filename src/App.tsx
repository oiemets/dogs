import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, Voting, Breeds, Gallery, Favourites, Likes, Dislikes, NotFound } from './pages';
import { TheDogsAPIClient } from './thedogsapi';
import { IconFrame, ImageWithSocialActions } from './components';

import photo from './assets/images/photo.jpeg';
import photo1 from './assets/images/photo1.jpg';

const client = new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26');

(async () => {
  // const result = await client.favourites().list()

  // console.log(result);
})();

function App() {
  const { pathname } = useLocation();
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