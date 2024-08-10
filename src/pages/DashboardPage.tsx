import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const DashboardPage: React.FC = () => {
  const [chartType, setChartType] = useState<string | null>(null);

  useEffect(() => {
    const savedChartType = localStorage.getItem('chartType');
    setChartType(savedChartType || 'line');
  }, []);

  const renderWidget = () => {
    switch (chartType) {
      case 'line': {
        const LineChart = dynamic(() => import('@/components/LineChart'), {
          ssr: false,
        });
        return <LineChart />;
      }
      case 'bar': {
        const BarChart = dynamic(() => import('@/components/BarChart'), {
          ssr: false,
        });
        return <BarChart />;
      }
      case 'table': {
        const DataTable = dynamic(() => import('@/components/DataTable'), {
          ssr: false,
        });
        return <DataTable />;
      }
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="widget-container">{renderWidget()}</div>
      </div>
      <footer className="footer">
        <p>Values are hard coded</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
