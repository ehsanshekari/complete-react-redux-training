import { render, screen, fireEvent } from '@testing-library/react';

import ClearInput from '../ClearInput';

describe('ClearInput component', () => {
  describe('button click test', () => {
    it('should clear the input', () => {
      render(<ClearInput />);

      const btn = screen.getByText(/clear/i);
      const inp = screen.getByPlaceholderText(/type your name/i);

      fireEvent.change(inp, {target: {value: 'hello!'}});
      fireEvent.click(btn);

      expect(inp.value).toBe('');
    });
  });
});
