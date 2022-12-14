import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe('test render App elements', () => {
  test('If Picture component is active, rendered only Picture component', () => {
    render(<App />);
    const buttonPicture = screen.getByRole('button', { name: 'Picture' });
    userEvent.click(buttonPicture);

    const componentPicture = screen.getByRole('heading', {
      level: 5,
      name: 'Whiskers',
    });
    const componentCalculations = screen.queryByText('Result');
    const componentButtonGroup = screen.queryByText('Align');

    expect(componentPicture).toBeInTheDocument();
    expect(componentCalculations).not.toBeInTheDocument();
    expect(componentButtonGroup).not.toBeInTheDocument();
  });

  test('If Calculate component is active, rendered only Calculate component', () => {
    render(<App />);
    const buttonCalculation = screen.getByRole('button', {
      name: 'Calculations',
    });
    userEvent.click(buttonCalculation);

    const componentCalculations = screen.getByRole('heading', {
      level: 5,
      name: 'Result',
    });
    const componentPicture = screen.queryByText('Whiskers');
    const componentButtonGroup = screen.queryByText('Align');

    expect(componentCalculations).toBeInTheDocument();
    expect(componentPicture).not.toBeInTheDocument();
    expect(componentButtonGroup).not.toBeInTheDocument();
  });

  test('If ButonGroup component is active, rendered only ButtonGroup component', () => {
    render(<App />);
    const buttonGroup = screen.getByRole('button', { name: 'Group' });
    userEvent.click(buttonGroup);

    const componentButtonGroup = screen.getByRole('heading', {
      level: 5,
      name: 'Align',
    });
    const componentPicture = screen.queryByText('Whiskers');
    const componentCalculations = screen.queryByText('Result');

    expect(componentButtonGroup).toBeInTheDocument();
    expect(componentPicture).not.toBeInTheDocument();
    expect(componentCalculations).not.toBeInTheDocument();
  });
});
