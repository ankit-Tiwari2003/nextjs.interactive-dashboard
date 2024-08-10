import { render, screen } from '@testing-library/react';
import DashboardPage from '@/pages/DashboardPage';
// import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('DashboardPage', () => {
  it('renders the correct chart based on local storage value', () => {
    localStorage.setItem('chartType', 'bar');
    render(<DashboardPage />);

    // Check if the BarChart is rendered
    expect(screen.getByText(/Sales/i)).toBeInTheDocument();
  });
});
