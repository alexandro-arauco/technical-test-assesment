"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Card } from "./Card";
import { Table } from "./Table";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Alert } from "./Alert";

// Mock data for table
interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active" },
];

export default function UIKitShowcase() {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(true);

  const tableColumns = [
    { header: "Name", accessor: "name" as keyof User },
    { header: "Email", accessor: "email" as keyof User },
    { header: "Status", accessor: "status" as keyof User },
    {
      header: "Actions",
      accessor: "id" as keyof User,
      cell: (user: User) => (
        <Button size="sm" variant="outline">
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            UI Kit Components
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Alerts Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Alerts" size="lg" variant="bordered">
              <div className="space-y-4 max-w-3xl mx-auto">
                {showAlert && (
                  <Alert
                    type="success"
                    title="Success Alert"
                    onClose={() => setShowAlert(false)}
                  >
                    This is a success message with a close button.
                  </Alert>
                )}

                <Alert type="error" title="Error Alert">
                  This is an error message.
                </Alert>

                <Alert type="warning" title="Warning Alert">
                  This is a warning message.
                </Alert>

                <Alert type="info" title="Info Alert">
                  This is an information message.
                </Alert>
              </div>
            </Card>

            {/* Form Controls Section */}

            <Card title="Form Controls" size="lg" variant="bordered">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Checkboxes
                    </h3>
                    <div className="space-y-3">
                      <Checkbox
                        label="Default Checkbox"
                        checked={checkboxValue}
                        onChange={setCheckboxValue}
                      />
                      <Checkbox
                        label="Disabled Checkbox"
                        checked={true}
                        onChange={() => {}}
                        disabled
                      />
                      <Checkbox
                        label="Error Checkbox"
                        checked={false}
                        onChange={() => {}}
                        error="This field has an error"
                      />
                    </div>
                  </div>

                  {/* Radio Buttons */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Radio Buttons
                    </h3>
                    <div className="space-y-3">
                      <Radio
                        name="options"
                        value="option1"
                        label="Option 1"
                        checked={radioValue === "option1"}
                        onChange={setRadioValue}
                      />
                      <Radio
                        name="options"
                        value="option2"
                        label="Option 2"
                        checked={radioValue === "option2"}
                        onChange={setRadioValue}
                      />
                      <Radio
                        name="options"
                        value="option3"
                        label="Disabled Option"
                        checked={false}
                        onChange={() => {}}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Table Section */}
          <section>
            <Card className="max-w-5xl  mx-auto" title="Table">
              <Table<User>
                columns={tableColumns}
                data={mockUsers}
                currentPage={currentPage}
                totalPages={3}
                onPageChange={setCurrentPage}
              />
            </Card>
          </section>

          {/* Buttons Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Buttons" size="lg" variant="bordered">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Inputs Section */}
            <Card title="Form Inputs" size="lg" variant="bordered">
              <div className="space-y-4">
                <Input
                  type="text"
                  label="Text Input"
                  placeholder="Enter text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <Input
                  type="email"
                  label="Email Input"
                  placeholder="Enter email"
                />

                <Input
                  label="Error Input"
                  placeholder="This input has an error"
                  error="This field has an error message"
                />
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
