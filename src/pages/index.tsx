import Link from 'next/link';
import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="home p-5">
      <h1 className='home_text'>Welcome to the Interactive Dashboard</h1>
      <nav className="indexpage_nav">
        <ul>
          <li>
            <Link href="/DashboardPage">
              <button className="nav-button">
                Go to Dashboard
              </button>
            </Link>
          </li>
          <li>
            <Link href="/SettingsPage">
              <button className="nav-button">
                Go to Settings
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
