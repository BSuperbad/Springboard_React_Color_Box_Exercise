import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders BoxList without crashing", function () {
    render(<BoxList />);
});

it("matches BoxList snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function(){
    const {queryByPlaceholderText, queryByText, container} = render(<BoxList />);
    const input = queryByPlaceholderText("Box Color");
    const btn = queryByText("Add Box");
    expect(container.querySelector('[style="background-color: orange;"]')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: "orange"}});
    fireEvent.click(btn);
    expect(container.querySelector('[style="background-color: orange;"]')).toBeInTheDocument();
});