import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../state';

// import { GetData } from './_testing/GetData';
import { BtnIcons } from './_testing/BtnIcons';
// import { GridView } from './_testing/GridView';
import { TestApp } from './_testing/TestApp';


function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <GetData /> */}
        <BtnIcons/>
        <TestApp />
      </Router>
    </Provider>
  );
}

export default App;