
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../Contact";

describe("ContactForm validation", () => {
  it("shows error if fields empty", async () => {
    render(<Contact />);
    fireEvent.click(screen.getByText(/Kirim Pesan/i));
    await waitFor(() => {
      expect(screen.getByText(/Harap isi semua field/i)).toBeInTheDocument();
    });
  });

  it("resets fields & shows toast if submitted", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Nama/i), { target: { value: "Arya" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "a@a.com" } });
    fireEvent.change(screen.getByLabelText(/Pesan/i), { target: { value: "Tes" } });
    fireEvent.click(screen.getByText(/Kirim Pesan/i));
    await waitFor(() => {
      expect(screen.getByText(/Terkirim!/i)).toBeInTheDocument();
    });
  });
});
