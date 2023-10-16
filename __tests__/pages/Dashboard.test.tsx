import React from 'react';
import { render, screen } from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";

test("The screen renders", async () => {
    render(<Dashboard />);
    expect(screen.findByText("ToDo's"));
    expect(screen.findByText("Doing"));
    expect(screen.findByText("Done"));
})