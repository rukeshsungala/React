import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import RestaruantMenu from "../RestaruantMenu";
import { MOCK_DATA_NAME } from "../mocks/restuarantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should Load Restuarant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaruantMenu />
      </Provider>
    )
  );
  const accordionHeader = screen.getByText("CHICKEN CHIZZA (4)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(4);
});
