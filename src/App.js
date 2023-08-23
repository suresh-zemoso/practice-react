import './App.css';
import CountUp1 from './CountUp1';
import CountUp from './CountUp';

function App() {
  return (
    <div className="App">
      {/* <CountUp1 totalCount={10} duration={5} /> */}
      <CountUp totalCount={1000} duration={5}/>
    </div>
  );
}

export default App;
