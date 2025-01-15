"use client";

import { useState } from "react";
import { Card } from "@/app/ui/kit/Card";
import { Table } from "@/app/ui/kit/Table";
import { Button } from "@/app/ui/kit/Button";
import { Alert } from "@/app/ui/kit/Alert";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { SkeletonCard } from "@/app/ui/kit/SkeletonCard";

// Mock data for charts
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 2000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 2390 },
];

const revenueData = [
  { name: "Mon", revenue: 2400 },
  { name: "Tue", revenue: 1398 },
  { name: "Wed", revenue: 9800 },
  { name: "Thu", revenue: 3908 },
  { name: "Fri", revenue: 4800 },
];

// Mock data for table
interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: string;
}

const recentOrders: Order[] = [
  {
    id: 1,
    customer: "John Doe",
    product: "Product A",
    amount: 150,
    status: "Completed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Product B",
    amount: 250,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    product: "Product C",
    amount: 350,
    status: "Processing",
  },
];

export default function AdminDashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const tableColumns = [
    { header: "Customer", accessor: "customer" as keyof Order },
    { header: "Product", accessor: "product" as keyof Order },
    {
      header: "Amount",
      accessor: "amount" as keyof Order,
      cell: (order: Order) => `$${order.amount}`,
    },
    {
      header: "Status",
      accessor: "status" as keyof Order,
      cell: (order: Order) => (
        <span
          className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${order.status === "Completed" ? "bg-green-100 text-green-800" : ""}
          ${order.status === "Pending" ? "bg-yellow-100 text-yellow-800" : ""}
          ${order.status === "Processing" ? "bg-blue-100 text-blue-800" : ""}
        `}
        >
          {order.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id" as keyof Order,
      cell: (order: Order) => (
        <Button size="sm" variant="outline">
          View
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Sales" variant="default">
          <div className="mt-2">
            <div className="text-3xl font-bold">$24,780</div>
            <div className="text-sm text-green-600 mt-1">
              +12% from last month
            </div>
          </div>
        </Card>

        <Card title="Active Users" variant="default">
          <div className="mt-2">
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-sm text-blue-600 mt-1">+8% from last week</div>
          </div>
        </Card>

        <Card title="Conversion Rate" variant="default">
          <div className="mt-2">
            <div className="text-3xl font-bold">2.4%</div>
            <div className="text-sm text-yellow-600 mt-1">
              -1% from yesterday
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Sales Overview" variant="default">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#4F46E5"
                  fill="#C7D2FE"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Revenue Analysis" variant="default">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        <Alert type="info" title="System Update">
          New features will be deployed tomorrow at 2 PM UTC.
        </Alert>
      </div>

      {/* Recent Orders Table */}
      <Card title="Recent Orders" variant="default">
        <Table<Order>
          columns={tableColumns}
          data={recentOrders}
          currentPage={currentPage}
          totalPages={3}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
}
