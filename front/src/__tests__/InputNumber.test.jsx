import {InputNumber} from "../components/InputNumber"
import { fireEvent, render, screen } from "@testing-library/react";

test("increase input number on click on +", () => {
  let inputQuantity = 0
  const setInputQuantity = (qty) => {
    inputQuantity = qty;
  }
  render(<InputNumber quantity={inputQuantity} callback={setInputQuantity} />)
  expect(screen.queryByTestId("checkIcon")).not.toBeInTheDocument() //je dois tester l'affichage (les éléments, bouto, - + input etc)
  const btn = screen.getByRole("button"); // get the button (pressable)
  fireEvent.click(btn); // click it

  // expect(inputQuantity).toBe(1)

  // click bouton -
  // expect(inputquantity).toBe(0)

  expect(screen.getByTestId("checkIcon")).toBeInTheDocument(); // check that the icon is displayed
  expect(increaseMock).toHaveBeenCalledTimes(1); // make sure that the onUpdate function that was passed via props was clicked
});