
// import React, { useRef, useEffect } from 'react';
// import { createChart } from 'lightweight-charts';

// const CryptoChart = ({ data }) => {
//     const chartContainerRef = useRef(null);
//     const chart = useRef(null);

//     useEffect(() => {
//         chart.current = createChart(chartContainerRef.current, { width: 600, height: 300 });
//         const lineSeries = chart.current.addLineSeries();
//         lineSeries.setData(data);
//     }, [data]);

//     return (
//         <div ref={chartContainerRef}></div>
//     );
// };

// export default CryptoChart;
