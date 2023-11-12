// MyChart.js
import React, { useEffect } from 'react';
import { useAmCharts } from '@amcharts/amcharts4-react';

const MyChart = () => {
  const chartRef = useAmCharts(() => {
    // 차트 초기화
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // 여기에 차트 구성 추가
    // 예시:
    const series = chart.series.push(new am4charts.LineSeries());
    series.data = [
      { category: 'Category 1', value: 10 },
      { category: 'Category 2', value: 20 },
      { category: 'Category 3', value: 15 },
    ];
    series.dataFields.categoryX = 'category';
    series.dataFields.valueY = 'value';

    // 정리 함수
    return () => {
      chart.dispose();
    };
  });

  // 컴포넌트가 언마운트될 때 정리하는 useEffect
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }} />;
};

export default MyChart;
