import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartData } from '@/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent: React.FC = () => {
  return (
    <div className="widget">
      <h2>Sales Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChartComponent;
