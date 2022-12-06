import { render, screen } from '@testing-library/react';

import Box from './Box';

describe('box component', () => {
  describe('simple test', () => {
    it('should render the correct prop value', () => {
      render(<Box text="hello" />);

      const element = screen.queryByText(/hello/i);
      expect(element).not.toBeNull();
    });
  });
});
