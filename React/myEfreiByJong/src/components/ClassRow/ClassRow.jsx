import React from "react";

import ClassRowStyles from "./ClassRow.module.scss"

const ClassRow = ({ classe }) => {
  const { className, students, courses, professors } = classe;
  return (
    <div className={ClassRowStyles.className}>
      <div>Class : </div>
      <div>{className}</div>
    </div>
  );
};

export default ClassRow;
