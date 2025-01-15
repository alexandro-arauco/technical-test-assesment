import { render, screen, fireEvent } from "@testing-library/react";
import UIKitShowcase from "@/app/ui/kit/showcase";

describe("UIKitShowcase Component", () => {
  it("renders all sections correctly", () => {
    render(<UIKitShowcase />);

    // Check header
    expect(screen.getByText("UI Kit Components")).toBeInTheDocument();

    // Check Alerts section
    expect(screen.getByText("Success Alert")).toBeInTheDocument();
    expect(screen.getByText("Error Alert")).toBeInTheDocument();
    expect(screen.getByText("Warning Alert")).toBeInTheDocument();
    expect(screen.getByText("Info Alert")).toBeInTheDocument();

    // Check Form Controls section
    expect(screen.getByText("Checkboxes")).toBeInTheDocument();
    expect(screen.getByText("Radio Buttons")).toBeInTheDocument();
    expect(screen.getByLabelText("Default Checkbox")).toBeInTheDocument();

    // Check Table section
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();

    // Check Buttons section
    expect(screen.getByText("Variants")).toBeInTheDocument();
    expect(screen.getByText("Sizes")).toBeInTheDocument();
  });

  it("handles alert dismissal", () => {
    render(<UIKitShowcase />);
    
    const successAlert = screen.getByText("Success Alert").closest("div");
    expect(successAlert).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /dismiss/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText("Success Alert")).not.toBeInTheDocument();
  });

  it("handles checkbox interactions", () => {
    render(<UIKitShowcase />);
    
    const checkbox = screen.getByLabelText("Default Checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("handles radio button interactions", () => {
    render(<UIKitShowcase />);
    
    const option1 = screen.getByLabelText("Option 1");

    expect(option1).toBeChecked();

    fireEvent.click(option1);
    expect(option1).toBeChecked();
  });

  it("handles table pagination", () => {
    render(<UIKitShowcase />);
    
    const page2Button = screen.getByRole("button", { name: "2" });
    fireEvent.click(page2Button);

    expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
  });

  it("handles input value changes", () => {
    render(<UIKitShowcase />);
    
    const textInput = screen.getByLabelText("Text Input");
    fireEvent.change(textInput, { target: { value: "test input" } });

    expect(textInput).toHaveValue("test input");
  });

  it("renders disabled states correctly", () => {
    render(<UIKitShowcase />);
    
    // Check disabled checkbox
    const disabledCheckbox = screen.getByLabelText("Disabled Checkbox");
    expect(disabledCheckbox).toBeDisabled();

    // Check disabled radio
    const disabledRadio = screen.getByLabelText("Disabled Option");
    expect(disabledRadio).toBeDisabled();
  });

  it("renders error states correctly", () => {
    render(<UIKitShowcase />);
    
    // Check error checkbox
    expect(screen.getByText("This field has an error")).toBeInTheDocument();

    // Check error input
    const errorInput = screen.getByLabelText("Error Input");
    expect(errorInput).toHaveClass("border-red-500");
    expect(screen.getByText("This field has an error message")).toBeInTheDocument();
  });

  it("handles button clicks", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<UIKitShowcase />);
    
    const editButtons = screen.getAllByText("Edit");
    fireEvent.click(editButtons[0]);

    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active"
    }));

    consoleSpy.mockRestore();
  });
}); 