import { render, screen } from "@testing-library/react";
import AddModal from "../../components/AddModal";

test("Card content is displayed ", async () => {
    render(<AddModal open={true} onClose={() => null} onSubmit={() => null} />);
    expect(screen.findByText("Nueva tarea"));
    expect(screen.findByText("Agregar"));
});
