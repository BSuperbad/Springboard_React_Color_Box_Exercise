import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders New Box Form without crashing", function () {
    render(<NewBoxForm />);
});

it("matches New Box Form snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

  it("should call addBox function on form submission", () => {
    const addBoxMock = jest.fn();
    const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBoxMock} />);

    fireEvent.change(getByLabelText("Color:"), { target: { value: "blue" } });
    fireEvent.change(getByLabelText("Width:"), { target: { value: "250" } });
    fireEvent.change(getByLabelText("Height:"), { target: { value: "400" } });

    fireEvent.click(getByText("Add Box"));

    expect(addBoxMock).toHaveBeenCalledWith({ color: "blue", width: "250", height: "400" });
  });



