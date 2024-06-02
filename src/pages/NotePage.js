// src/pages/NotePage.js
import React from "react";
import { useParams } from "react-router-dom";
import Calc1Section1 from "../notes/calc1/Calc1Section1";

const noteComponents = {
  calc1: {
    section1: Calc1Section1,
  },
  // Add other classes and sections as needed
};

function NotePage() {
  const { className, section } = useParams();
  const NoteComponent =
    noteComponents[className]?.[section] || (() => <div>Note not found</div>);

  return (
    <div>
      <NoteComponent />
    </div>
  );
}

export default NotePage;
