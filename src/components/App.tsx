import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../state';

import { BtnIcons } from './_testing/BtnIcons';
import { TestApp } from './_testing/TestApp';
import { TheDogsAPIClient } from '../thedogsapi';

const client = new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26');

(async () => {
  // const result = await client.favourites().list()

  // console.log(result);

  
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