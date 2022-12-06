import {render, screen, fireEvent} from '@testing-library/react';

import ClearInput from '../ClearInput';



describe('ClearInput component', () => {
  describe('button tests', () => {
    it('should clear the input', () => {
      render(<ClearInput />);
    
      const btn = screen.getByText(/clear/i);
      const input = screen.getByPlaceholderText(/type your name/i);
    
      fireEvent.click(btn);
    
      // CHECKS
      expect(input.value).toBe('');
    })
  })

  describe('input test', () => {
  })
})
