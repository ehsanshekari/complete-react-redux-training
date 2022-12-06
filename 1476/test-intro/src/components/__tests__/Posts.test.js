import { render, screen } from '@testing-library/react';

import Posts from '../Posts';

describe('Posts component', () => {
    it('should show 3 posts', async () => {
      render(<Posts />);

      const divElements = await screen.findAllByTestId(/post-\d/i);

      expect(divElements.length).toBe(3);
    });
});
