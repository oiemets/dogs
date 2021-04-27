import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './state';
import { TheDogsAPIClient } from './thedogsapi';

ReactDOM.render(
  <Router>
    <Provider store={createAppStore(
      {},
      { api: new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26') }
    )}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
