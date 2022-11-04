import logo from './logo.svg';
import './App.css';
import CountBox from './components/CountBox';
import Memo from './components/Memo';
import News from './components/News';
import NewsSagaBox from './components/NewsSagaBox';
function App() {
  return (
    <div className="App">
      <CountBox/>
      <Memo/>
      <News/>
      <NewsSagaBox/>
    </div>
  );
}

export default App;
