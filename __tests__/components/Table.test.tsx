import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "@/app/ui/kit/Table";

const mockData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const columns = [
  { header: "Name", accessor: "name" as const },
  { header: "Email", accessor: "email" as const },
];

describe("Table Component", () => {
  it("renders table with data", () => {
    render(<Table columns={columns} data={mockData} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
  });

  it("handles pagination", () => {
    const handlePageChange = jest.fn();
    render(
      <Table
        columns={columns}
        data={mockData}
        currentPage={1}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    );

    fireEvent.click(screen.getByText("2"));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
