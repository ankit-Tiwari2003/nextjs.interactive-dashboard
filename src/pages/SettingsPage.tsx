import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';

const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [chartType, setChartType] = useState('line');
  const router = useRouter();

  const handleSave = () => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('chartType', chartType);
    router.push('/DashboardPage');
  };

  return (
    <div>
      <Navbar />
      <div className="settings-container">
        <div className="settings-box">
          <h1 className='setting_text'>Settings</h1>
          <div className="settings-item">
            <label>
              Theme: &nbsp;
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="gradient">Gradient</option>
              </select>
            </label>
          </div>
          <div className="settings-item">
            <label>
              Chart Type: &nbsp;
              <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
                <option value="line">Line</option>
                <option value="bar">Bar</option>
                <option value="table">Table</option>
              </select>
            </label>
          </div>
          <button onClick={handleSave} className='save_btn'>Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
