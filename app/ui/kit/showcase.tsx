'use client';

import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Card } from './Card';

export default function UIKitShowcase() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">UI Kit Components</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Buttons Section */}
            <section>
              <Card title="Buttons" size="lg" variant="bordered">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="danger">Danger</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">States</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Cards Section */}
            <section>
              <Card title="Card Variants" size="lg" variant="bordered">
                <div className="space-y-6">
                  <Card
                    title="Default Card"
                    subtitle="With shadow"
                    variant="default"
                  >
                    <p className="text-gray-600">Default card with shadow styling.</p>
                  </Card>

                  <Card
                    title="Bordered Card"
                    subtitle="With border"
                    variant="bordered"
                  >
                    <p className="text-gray-600">Card with border instead of shadow.</p>
                  </Card>

                  <Card
                    title="Flat Card"
                    subtitle="With background"
                    variant="flat"
                  >
                    <p className="text-gray-600">Card with flat background styling.</p>
                  </Card>
                </div>
              </Card>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Inputs Section */}
            <section>
              <Card title="Form Inputs" size="lg" variant="bordered">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Basic Inputs</h3>
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
                        type="password"
                        label="Password Input"
                        placeholder="Enter password"
                      />
                      
                      <Input
                        type="number"
                        label="Number Input"
                        placeholder="Enter number"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Input States</h3>
                    <div className="space-y-4">
                      <Input
                        label="Disabled Input"
                        placeholder="This input is disabled"
                        disabled
                      />
                      
                      <Input
                        label="Error Input"
                        placeholder="This input has an error"
                        error="This field has an error message"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Complex Card Examples */}
            <section>
              <Card title="Card Examples" size="lg" variant="bordered">
                <div className="space-y-6">
                  <Card
                    size="md"
                    title="Interactive Card"
                    subtitle="With actions and footer"
                    headerAction={
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    }
                    footer={
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button size="sm">Save</Button>
                      </div>
                    }
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This card demonstrates various features including:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Header with action button</li>
                        <li>Title and subtitle</li>
                        <li>Content area</li>
                        <li>Footer with multiple actions</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 