import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SettingsPage from '@/pages/SettingsPage';
import { ThemeContext } from '@/context/ThemeContext';
// import { toHaveValue } from '@testing-library/jest-dom';


describe('SettingsPage', () => {
  it('renders the settings page with default values', () => {
    const setTheme = jest.fn();
    render(
      <ThemeContext.Provider value={{ theme: 'light', setTheme }}>
        <SettingsPage />
      </ThemeContext.Provider>
    );

    // Check if the default theme is 'light'
    expect(screen.getByLabelText(/Theme/i)).toHaveValue('light');

    // Check if the default chart type is 'line'
    expect(screen.getByLabelText(/Chart Type/i)).toHaveValue('line');
  });

  it('changes the theme when a new theme is selected', () => {
    const setTheme = jest.fn();
    render(
      <ThemeContext.Provider value={{ theme: 'light', setTheme }}>
        <SettingsPage />
      </ThemeContext.Provider>
    );

    fireEvent.change(screen.getByLabelText(/Theme/i), { target: { value: 'dark' } });
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
