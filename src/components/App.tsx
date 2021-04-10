import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../state';
// import { Grid } from './Grid/Grid';
import { Button } from './Button/Button';
import { IconButton } from './IconButton/IconButton';


type Mock = {
  id: number;
  name: string;
  age: number;
}

const mockArray: Mock[] = [
  { id: 1, name: 'Jack', age: 23 },
  { id: 2, name: 'John', age: 15 },
  { id: 3, name: 'Bill', age: 43 },
  { id: 4, name: 'Stewart', age: 25 },
  { id: 5, name: 'Stacy', age: 85 },
  { id: 6, name: 'Thelonius', age: 36},
  { id: 7, name: 'Arthur', age: 86 },
  { id: 8, name: 'Cler', age: 62 },
  { id: 9, name: 'Roberta', age: 76 },
  { id: 10, name: 'Antonio', age: 24},
  { id: 11, name: 'Jesus', age: 19 },
  { id: 12, name: 'Ethan', age: 17 },
  { id: 13, name: 'Claude', age: 23 },
  { id: 14, name: 'Elvis', age: 15 },
  { id: 15, name: 'Buddy', age: 43 },
  { id: 16, name: 'Trevor', age: 25 },
  { id: 17, name: 'Milgred', age: 85 },
  { id: 18, name: 'Matt', age: 36},
  { id: 19, name: 'Hans', age: 86 },
  { id: 20, name: 'Owen', age: 62 },
  { id: 21, name: 'Jill', age: 76 },
  { id: 22, name: 'Casper', age: 24},
  { id: 23, name: 'Rick', age: 19 },
  { id: 24, name: 'Stan', age: 17 },
];

const renderItem = (chunk: Mock, index: number) => (
  <div key={index}></div>
  );

const testBtnClick = (e: React.SyntheticEvent): void => {
  console.log('clicked');
}

function App() {
  return (
    <Provider store={store}>
      <Router>

        {/* <Grid data={mockArray} renderItem={renderItem}/> */}


        <div style={{backgroundColor: 'grey', padding: '20px'}}>
          <Button>voting</Button>

          <Button variant='gray'>gray</Button>
          <Button variant='whiteDark'>white dark</Button>
          
          <IconButton icon='smile' />
          <IconButton icon='heart'/>
          <IconButton icon='sad' />

          <IconButton icon='arrowLeft' variant='satin' />
          <IconButton icon='magnifyingGlass' variant='satin' />
          <IconButton icon='close' variant='whiteDark'/>
          <IconButton icon='heart' variant='whiteDark'/>
          <IconButton icon='heartFilled' variant='whiteDark'/>
          <IconButton icon='orderUp' variant='gray'/>
          <IconButton icon='orderDown' variant='gray'/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;