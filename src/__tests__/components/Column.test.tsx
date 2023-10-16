import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Column from "../../components/Column";

test("The screen renders the column ", async () => {
    render(<Column id="ToDo" title="ToDo's" cards={[]} setCards={() => null} />);
    expect(screen.findByText("ToDo's"));
    expect(screen.findByText("Agregar Tarea"));
});