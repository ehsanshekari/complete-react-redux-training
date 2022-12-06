import { render, screen } from '@testing-library/react';

import Box from '../Box';

describe('Box component', () => {
  describe('Simple test', () => {
    it('should render the correct props', () => {
      render(<Box text="javascript" />);

      const el = screen.queryByText(/javascript/i);

      expect(el).not.toBeNull();
    });
  });
});
