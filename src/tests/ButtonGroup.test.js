import { render, screen } from '@testing-library/react';
import ButtonGroup from '../components/ButtonGroup';
import userEvent from '@testing-library/user-event';

describe('ButtonGroup', () => {
  test('renders ButtonGroup, header, text', () => {
    render(<ButtonGroup />);
    
    const textElement = screen.getByTestId('text');
    expect(textElement).toBeInTheDocument();
    
    const cardElement = screen.getByTestId('button-group');
    expect(cardElement).toBeInTheDocument();
    
    const leftButton = screen.getByRole('radio', { name: /left/i });
    expect(leftButton).toBeInTheDocument();
    expect(leftButton).toBeChecked();
    
    const centerButton = screen.getByRole('radio', { name: /center/i });
    expect(centerButton).toBeInTheDocument();
    
    const rightButton = screen.getByRole('radio', { name: /right/i });
    expect(rightButton).toBeInTheDocument();
    
    const headerElement = screen.getByRole('heading', {name: /align/i});
    expect(headerElement).toBeInTheDocument();
  });
  
  test('check text-alignment when change allignment by buttons', () => {
    render(<ButtonGroup />);
    const textElement = screen.getByTestId('text');
  
    const leftButton = screen.getByRole('radio', { name: /left/i });
    userEvent.click(leftButton);
    expect(leftButton).toBeChecked();
    expect(textElement).toHaveAttribute('align', 'left');
  
    const centerButton = screen.getByRole('radio', { name: /center/i });
    userEvent.click(centerButton);
    expect(centerButton).toBeChecked();
    expect(textElement).toHaveAttribute('align', 'center');
  
    const rightButton = screen.getByRole('radio', { name: /right/i });
    userEvent.click(rightButton);
    expect(rightButton).toBeChecked();
    expect(textElement).toHaveAttribute('align', 'right');
    
  });
  
});