import React, { useState } from 'react';
import ChartComponent from './components/ChartComponent';
import TimeframeSelector from './components/TimeframeSelector';
import './App.css';

function App() {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Charting Library with React</h1>
      </header>
      <main>
        <TimeframeSelector onSelect={setTimeframe} />
        <ChartComponent timeframe={timeframe} />
      </main>
    </div>
  );
}

export default App;
