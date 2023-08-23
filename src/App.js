import './App.css';
import CountUp1 from './CountUp1';
import CountUp from './CountUp';

function App() {
  return (
    <div className="App">
      {/* <CountUp totalCount={10} duration={5} /> */}
      <CountUp1 totalCount={1000} duration={5}/>
    </div>
  );
}

export default App;
