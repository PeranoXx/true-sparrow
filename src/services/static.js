import { ref } from "vue";

export const staticData = () => {
  const menus = [
    { name: "Home", id: "home" },
    { name: "Analytics", id: "analytics" },
    { name: "Reports", id: "reports" },
    { name: "Tasks", id: "tasks" },
    { name: "Messages", id: "messages" },
    { name: "Settings", id: "settings" },
  ];

  const headerCards = [
    {
      id: "total-sales",
      title: "Total Sales",
      value: "$24,500",
      percentage: 12,
      color: "success",
      trend: "up",
    },
    {
      id: "new-users",
      title: "New Users",
      value: "1,230",
      percentage: 8,
      color: "info",
      trend: "up",
    },
    {
      id: "tickets",
      title: "Tickets",
      value: "78",
      color: "warning",
      trend: "up",
    },
    {
      id: "bounce-rate",
      title: "Bounce Rate",
      value: "42.1%",
      percentage: 3,
      color: "danger",
      trend: "down",
    },
  ];

  const styledTableData = ref([
    {
      id: 1,
      task_name: "Design Homepage",
      status: "in_progress",
      assigned_to: "John Doe",
      due_date: "May 15, 2024",
    },
    {
      id: 2,
      task_name: "Update Server",
      status: "completed",
      assigned_to: "Alice Smith",
      due_date: "May 10, 2024",
    },
    {
      id: 3,
      task_name: "Client Meeting",
      status: "pending",
      assigned_to: "Michael Brown",
      due_date: "May 18, 2024",
    },
    {
      id: 4,
      task_name: "Write Report",
      status: "in_progress",
      assigned_to: "Sarah Lee",
      due_date: "May 20, 2024",
    },
  ]);

  const tableHeaders = [
    { title: "Task Name", data: "task_name" },
    { title: "Status", data: "status" },
    { title: "Assigned To", data: "assigned_to" },
    { title: "Due Date", data: "due_date" },
    { title: "", data: "options" },
  ];

  const chartData = [
    { name: "Jan", expense: 12, revenue: 14 },
    { name: "Feb", expense: 14, revenue: 16 },
    { name: "Apr", expense: 16, revenue: 18 },
    { name: "Mar", expense: 20, revenue: 16 },
    { name: "May", expense: 18, revenue: 20 },
    { name: "Jun", expense: 22, revenue: 19 },
    { name: "Jul", expense: 20, revenue: 22 },
    { name: "Aug", expense: 24, revenue: 21 },
    { name: "Sep", expense: 22, revenue: 24 },
    { name: "Oct", expense: 26, revenue: 24 },
    { name: "Nov", expense: 30, revenue: 24 },
  ];
  const direction = ref("horizontal");
  const margin = ref({
    left: 0,
    top: 20,
    right: 20,
    bottom: 0,
  });

  return {
    menus,
    headerCards,
    styledTableData,
    tableHeaders,
    chartData,
    direction,
    margin,
  };
};
