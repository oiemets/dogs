import { Provider } from 'react-redux';
import { store } from '../state';
import Test from './Test';
// import Grid from './Grid/Grid';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>pets paw</h1>
      </div>
      <Test />
    </Provider>
  );
}

export default App;
