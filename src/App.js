import React from 'react';
import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';

const count =30; 

const startingNumbers =Array(count)
.fill(1)
.map((_, i) => i);

function App() {
  const [data, setData] = useState({
    x: startingNumbers,
    y: startingNumbers
  });
  
  useEffect(() =>{
    const interval = setInterval(() =>{
      setData((prev) => {
        return{
          x:prev.x,
          y:[...prev.y.slice(1),Math.floor(Math.random() * count)]
        };
      });
    }, 5000);
    console.log()
    return () => {
      clearInterval(interval);
    };
  }, []);

  const standardDeviation = (arr, usePopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
  };
  
  console.log('STDEV.S =>',
    standardDeviation([
      //10, 2, 38, 23, 38, 23, 21
      
    ])
  );
  
  console.log('STDEV.P =>',
    standardDeviation([
      //10, 2, 38, 23, 38, 23, 21
    
    ], true)
  );
  return (
    <div className= "App">
       <Plot
       data={[data]}
       layout={{
         title: "FinTech Graph Real-Time",
         xaxis: { range: [-5, count] },
         yaxis: { range: [-5, count] }
       }}
       />
    </div>
  );

  
      }
export default App;