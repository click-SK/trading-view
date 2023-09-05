import logo from './logo.svg';
import './App.css';
import CryptoChart from './components/CryptoChart';
import StockChart from './components/StockChart';
import CandlestickChart from './components/CandlestickChart';

function App() {

  const sampleData = [
    { time: '2022-01-01', value: 48000 },
    { time: '2022-01-02', value: 48200 },
    { time: '2022-01-03', value: 48212 },
    { time: '2022-01-04', value: 48200 },
    { time: '2022-01-05', value: 4432 },
    { time: '2022-01-06', value: 896667 },
    // ... інші дані
];


  return (
    <div className="App">
       <div className="App">
            {/* <CryptoChart data={sampleData} /> */}
            {/* <StockChart/> */}
        </div>
    </div>
  );
}

export default App;
