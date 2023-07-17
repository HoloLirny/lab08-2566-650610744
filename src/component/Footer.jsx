import React from "react";

export default function Footer({ year, fullName, studentId }) {
  return (
    <footer>
      <p className="text-secondary text-center">
        &copy; {year} {fullName} - Student ID: {studentId}
      </p>
    </footer>
  );
}
