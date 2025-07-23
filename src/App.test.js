import { render, screen } from "@testing-library/react"
import App from "./App"

// Fixed: Updated test to match actual app content
test("renders app header", () => {
  render(<App />)
  // Look for the actual content in your app instead of "learn react"
  const headerElement = screen.getByText(/Responsive App/i)
  expect(headerElement).toBeInTheDocument()
})

test("renders welcome message", () => {
  render(<App />)
  const welcomeElement = screen.getByText(/Welcome to Our App/i)
  expect(welcomeElement).toBeInTheDocument()
})
