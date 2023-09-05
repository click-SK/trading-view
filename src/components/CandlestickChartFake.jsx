import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import TradeViewChart from "react-crypto-chart";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CandlestickChartFake = () => {

    const [timestamp, setTimestamp] = useState(Date.now());

    useEffect(() => {
      const interval = setInterval(() => {
        // Оновлюємо timestamp щоб викликати повторне рендерування компоненту
        setTimestamp(Date.now());
      }, 5000); // оновлення кожні 5 секунд
  
      return () => clearInterval(interval);
    }, []);
    
    console.log('helop');

  return (
    <div className="parent">
      <TradeViewChart
      key={timestamp} 
        interval="1d"
        containerStyle={{
          minHeight: "700px",
          minWidth: "100vw",
          marginBottom: "30px"
        }}
        chartLayout={{
          layout: {
            backgroundColor: "black",
            textColor: "white"
          },
          grid: {
            vertLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            },
            horzLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            }
          },
          priceScale: {
            borderColor: "#485c7b"
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false
          }
        }}
        candleStickConfig={{
          upColor: "green",
          downColor: "red",
          borderDownColor: "transparent",
          borderUpColor: "transparent",
          wickDownColor: "gray",
          wickUpColor: "gray"
        }}
        pair="ETHUSDT"
      />
    </div>
  );
};

export default CandlestickChartFake;
