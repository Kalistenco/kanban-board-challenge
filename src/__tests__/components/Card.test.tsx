import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";

test("Card content is displayed ", async () => {
    render(<Card card={{ id: "ToDo", content: "Some Task", category: "ToDo" }} />);
    expect(screen.findByText("Some Task"));
});