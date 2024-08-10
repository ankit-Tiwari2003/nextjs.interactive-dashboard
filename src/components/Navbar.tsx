import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/DashboardPage">Dashboard</Link>
        </li>
        <li>
          <Link href="/SettingsPage">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
