import logo from './logo.svg';
import './App.css';
import CountBox from './components/CountBox';
import Memo from './components/Memo';
import News from './components/News';
function App() {
  return (
    <div className="App">
      <CountBox/>
      <Memo/>
      <News/>
    </div>
  );
}

export default App;
