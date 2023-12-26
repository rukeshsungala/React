import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestuarantCard component with props Data", () => {
  render(<ResturantCard res={MOCK_DATA} />);
  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument("KFC");
});
