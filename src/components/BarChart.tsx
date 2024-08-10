import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartData } from '@/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent: React.FC = () => {
  return (
    <div className="widget">
      <h2>Sales Over Time</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChartComponent;
