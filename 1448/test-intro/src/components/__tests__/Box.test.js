import {render, screen} from '@testing-library/react';

import Box from '../Box';

describe('Box component', () => {
  describe('Simple test', () => {
    it('should render the correct prop', () => {
      render(<Box text="hello"/>);
    
      const element = screen.queryByText(/hello/i);
    
      // CHECKS
      expect(element).not.toBeNull();
    })
  })
})
