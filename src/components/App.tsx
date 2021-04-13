import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../state';

import { BtnIcons } from './_testing/BtnIcons';
import { TestApp } from './_testing/TestApp';
import { TheDogsAPIClient } from '../thedogsapi';

const client = new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26');

(async () => {
  // const r = await client.breeds().list();
  // console.log(r)

  // const addReq = await client.favourites().add({ image_id: 'hMyT4CDXR', sub_id: 'olek' });
  // const getReq = await client.favourites().get('5590');
  // const deleteReq = await client.favourites().del('5591');
  const listReq = await client.favourites().list();


  console.log(listReq);
  
})();


function App() {
  return (
    <Provider store={store}>
      <Router>
        <BtnIcons/>
        <TestApp />
      </Router>
    </Provider>
  );
}

export default App;