// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const classes = [
  { name: "Calc 1", path: "/calc1" },
  { name: "Class 2", path: "/class2" },
];

function Sidebar() {
  return (
    <aside>
      <h2>Classes</h2>
      <ul>
        {classes.map((cls, index) => (
          <li key={index}>
            <Link to={cls.path}>{cls.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
