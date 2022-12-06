import { render, screen, fireEvent } from "@testing-library/react"
import ClearInput from "./ClearInput"


it("should clear the input", () => {
  render(<ClearInput />)
  const btn = screen.getByText(/clear/i);
  const inp = screen.getByPlaceholderText(/type your name/i);

  fireEvent.click(btn);

  expect(inp.value).toBe('');

})