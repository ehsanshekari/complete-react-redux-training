import { render, screen } from '@testing-library/react';

import Box from '../Box';

describe('Box Component', () => {
  describe('Simple test', () => {
    it('should render the correct prop', () => {
      render(<Box text="javascript" />);
    
      const el = screen.queryByText(/javascript/i);
    
      expect(el).not.toBeNull();
    });
  })
})
