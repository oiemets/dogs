import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './state';
import { TheDogsAPIClient } from './thedogsapi';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={createAppStore(
      {},
      { 
        api: new TheDogsAPIClient('b06400d4-45bc-4191-b373-f3ab932ced26'),
        history
      }
    )}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
