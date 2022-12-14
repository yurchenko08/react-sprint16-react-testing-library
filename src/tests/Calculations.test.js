import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculations from '../components/Calculations';

describe('Calculations', () => {
  test('test addition', () => {
    render(<Calculations />);

    const result = screen.getByRole('heading', { level: 4 });
    const firstValue = screen.getByRole('spinbutton', { name: 'first number' });
    const secondValue = screen.getByRole('spinbutton', {
      name: 'second number',
    });
    const operator = screen.getByRole('button', { name: 'operation' });
    const getResultButton = screen.getByRole('button', { name: 'Evaluate' });

    expect(result).toBeInTheDocument();
    expect(firstValue).toBeInTheDocument();
    expect(secondValue).toBeInTheDocument();
    expect(operator).toHaveTextContent('+');

    userEvent.type(firstValue, '10');
    userEvent.type(secondValue, '5');

    userEvent.click(getResultButton);
    expect(result).toHaveTextContent('15');
  });

  test('test subtraction', () => {
    render(<Calculations />);

    const result = screen.getByRole('heading', { level: 4 });
    const firstValue = screen.getByRole('spinbutton', { name: 'first number' });
    const secondValue = screen.getByRole('spinbutton', {
      name: 'second number',
    });
    const operator = screen.getByRole('button', { name: 'operation' });
    const getResultButton = screen.getByRole('button', { name: 'Evaluate' });

    expect(result).toBeInTheDocument();
    expect(firstValue).toBeInTheDocument();
    expect(secondValue).toBeInTheDocument();

    userEvent.type(firstValue, '10');
    userEvent.type(secondValue, '5');

    const changeToMinusOperator = screen.getByText('-');
    userEvent.click(changeToMinusOperator);
    expect(operator).toHaveTextContent('-');
    userEvent.click(getResultButton);
    expect(result).toHaveTextContent('5');
  });
});
