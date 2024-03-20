import {inputNumber} from "../components/InputNumber"
import { fireEvent, render, screen } from "@testing-library/react";

test("increase input number on click on +", () => {
  const increaseMock = jest.fn();
  render(<inputNumber onUpdate={increaseMock} />);
  expect(screen.queryByTestId("checkIcon")).not.toBeInTheDocument(); // check that the icon is not rendered
  const btn = screen.getByRole("button"); // get the button (pressable)
  fireEvent.click(btn); // click it

  expect(screen.getByTestId("checkIcon")).toBeInTheDocument(); // check that the icon is displayed
  expect(increaseMock).toHaveBeenCalledTimes(1); // make sure that the onUpdate function that was passed via props was clicked
});