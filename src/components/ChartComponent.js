import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ChartComponent = ({ timeframe }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const filterDataByTimeframe = (data, timeframe) => {
    return data;
  };

  const filteredData = filterDataByTimeframe(data, timeframe);

  return (
    <LineChart width={600} height={300} data={filteredData}>
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  );
};

export default ChartComponent;
