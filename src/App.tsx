import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, Voting, Breeds, Gallery, Favourites, Likes, Dislikes, NotFound } from './pages';
import { TheDogsAPIClient } from './thedogsapi';
import { IconFrame, SocialActions, ImageWithSocialActions,
  Button, IconButton


} from './components';
import photo from './assets/images/photo.jpeg'
import photo1 from './assets/images/photo1.jpg'
import photo2 from './assets/images/photo2.png'
import photo3 from './assets/images/photo3.png'
import photo4 from './assets/images/photo4.png'
import photo5 from './assets/images/photo5.jpg'

const client = new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26');

(async () => {
  // const result = await client.favourites().list()

  // console.log(result);

  
})();

function App() {
  const { pathname } = useLocation();
  return (
    <div className='container'>
      <h4>{pathname}</h4>

      <IconFrame target='voting'/>
      <IconFrame target='breeds'/>
      <IconFrame target='gallery'/>

      <SocialActions
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <SocialActions
        isFavorited
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />


      <Button>huyhuyhuy</Button>
      <Button variant='geraldine' >upload</Button>
      <Button variant='satin' >upload</Button>

      <IconButton icon='approved' size='L' />
      <IconButton icon='arrowLeft' size='M' />
      <IconButton icon='close' size='S' variant='geraldine'  />
      <IconButton icon='heartFilled' variant='whiteDark' />
      <IconButton icon='orderDown' variant='satin' size='L'/>
      <IconButton icon='search' size='L' />


      <ImageWithSocialActions
        url={photo1}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <ImageWithSocialActions
        url={photo}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <ImageWithSocialActions
        url={photo2}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <ImageWithSocialActions
        url={photo3}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <ImageWithSocialActions
        url={photo4}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
      />

      <ImageWithSocialActions
        url={photo5}
        onLikeChange={() => console.log('huy like')}
        onFavourite={() => console.log('huy dislike')}
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