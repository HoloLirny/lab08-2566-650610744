import React from "react";

export default function Task({ title }) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <p>{title}</p>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
}
