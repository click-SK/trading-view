import React, { useEffect, useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CandlestickChart = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const apiKey = "0f2416c3-1c87-4350-85e7-69569eb5ee5c";
  const secretKey = "2B3E8FD744460B6CA7D92905CED886BD";

  const fetchData = async () => {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const method = "GET";
    const requestPath = "/api/v1/instruments/BTC-USDT/candles?granularity=60"; // Перевірте документацію OKEx для точного URL

    const sign = crypto
      .createHmac('sha256', secretKey)
      .update(`${timestamp}${method}${requestPath}`)
      .digest('hex');

    const headers = {
      'OK-ACCESS-KEY': apiKey,
      'OK-ACCESS-SIGN': sign,
      'OK-ACCESS-TIMESTAMP': timestamp,
      'OK-ACCESS-PASSPHRASE': '', // якщо потрібен додатковий пароль
    };

    try {
      // const response = await axios.get(`https://www.okex.com${requestPath}`, { headers });
      const response = await fetch(`https://www.okex.com${requestPath}`, {
        method:'GET',
        headers:headers
      }
      )
      const newDataPoints = response.data.map(item => {
        return {
          x: new Date(item[0]), // Дата і час
          y: [
            parseFloat(item[1]), // Відкриття
            parseFloat(item[2]), // Верх
            parseFloat(item[3]), // Низ
            parseFloat(item[4])  // Закриття
          ]
        };
      });
      setDataPoints(newDataPoints);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   const interval = setInterval(fetchData, 60000); // оновлення кожної хвилини
  //   return () => clearInterval(interval);
  // }, []);

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "BTC/USDT Rate (1 Minute)"
    },
    axisX: {
      valueFormatString: "HH:mm:ss"
    },
    axisY: {
      includeZero: false,
      prefix: "$",
      title: "Price (in USD)"
    },
    data: [{
      type: "candlestick",
      yValueFormatString: "$###0.00",
      dataPoints
    }]
  };

  console.log(options);

  return (
    <div>
      <h1>BTC/USDT Rate (1 Minute)</h1>
      <CanvasJSChart options={options} />
      <button onClick={fetchData} >new</button>
    </div>
  );
};

export default CandlestickChart;
