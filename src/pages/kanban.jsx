import React from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

const Kanban = () => {
  const data = [
    { Id: '1', Status: 'Open', Summary: 'Initial Task' },
    { Id: '2', Status: 'In Progress', Summary: 'Working on it' }
  ];

  return (
    <div className="p-8">
      <h2 className="mb-4 text-lg font-bold">Kanban Board</h2>
      <KanbanComponent id="kanban" keyField="Status" dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective headerText="Open" keyField="Open" />
          <ColumnDirective headerText="In Progress" keyField="In Progress" />
          <ColumnDirective headerText="Completed" keyField="Completed" />
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
