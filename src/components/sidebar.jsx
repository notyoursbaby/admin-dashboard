import React from "react";

const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-100 h-screen">
      <ul>
        <li className="mb-4"><a href="/">Dashboard</a></li>
        <li className="mb-4"><a href="/calendar">Calendar</a></li>
        <li className="mb-4"><a href="/kanban">Kanban</a></li>
        <li className="mb-4"><a href="/bar">Bar Chart</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
