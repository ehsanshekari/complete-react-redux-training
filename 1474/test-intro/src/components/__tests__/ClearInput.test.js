import { render, screen, fireEvent } from '@testing-library/react';

import ClearInput from '../ClearInput';

describe('ClearInput Component', () => {
  describe('Clear button', () => {
    it('should clear the input', async () => {
      render(<ClearInput />);

      const btn = screen.getByText(/clear/i);
      const inp = screen.getByPlaceholderText(/type your name/i);

      fireEvent.change(inp, { target: { value: 'Hello World' } });
      fireEvent.click(btn);

      expect(inp.value).toBe('');
    });
  });
});
