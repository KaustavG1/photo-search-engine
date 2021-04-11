import './App.css';
import Search from './Components/Search';
import ResultList from './Components/ResultList';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';

function App() {
  return (
    <Provider store={Store} >
      <div className="App">
        <Search />
        <ResultList />
      </div>
    </Provider>
  );
}

export default App;
