
import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "../FAQ";

describe("FAQ Accordion", () => {
  it("should toggle answers when question clicked", () => {
    render(<FAQ />);
    const qButton = screen.getByText(/Apa itu Sekolab/i);
    expect(screen.queryByText(/Sekolab adalah platform belajar/i)).toBeNull();
    fireEvent.click(qButton);
    expect(screen.getByText(/Sekolab adalah platform belajar/i)).toBeInTheDocument();
    fireEvent.click(qButton);
    expect(screen.queryByText(/Sekolab adalah platform belajar/i)).toBeNull();
  });
});
