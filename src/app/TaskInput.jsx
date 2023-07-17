import React from "react";

export default function TaskInput() {
  return (
    <div className="d-flex gap-1">
      <input className="form-control" placeholder="Insert a task here..." />
      <button>Add</button>
    </div>
  );
}
