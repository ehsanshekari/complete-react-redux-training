import { render, screen } from "@testing-library/react";

import Posts from "./Posts";

it("should fetch and render 3 posts", async() => {
  render(<Posts />);
  const divElements = await screen.findAllByTestId(/post-\d*/i);
  expect(divElements.length).toBe(3);
})