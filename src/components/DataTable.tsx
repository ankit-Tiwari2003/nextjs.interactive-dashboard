import React from 'react';
import { chartData } from '@/data/data';
import './DataTable.css'; 

const DataTableComponent: React.FC = () => {
  return (
    <div className="widget">
      <h2>Sales Data</h2>
      <div className="table-container">
        <table className="double-line-table">
          <thead>
            <tr>
              {chartData.labels.map((label, index) => (
                <th key={index}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {chartData.datasets[0].data.map((value, index) => (
                <td key={index} data-label={chartData.labels[index]}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableComponent;
