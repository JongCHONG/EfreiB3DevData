import React from "react";

import ClassRowStyles from "./ClassRow.module.scss";

const ClassRow = ({ classe }) => {
  const { className, students, courses, professors } = classe;
  return (
    <div className={ClassRowStyles.classContainer}>
      <div>Class : {className}</div>
      <div className={ClassRowStyles.students}>
        <div>
          Liste des étudiants :{" "}
          {students.map((student) => student.name).join(", ")}
        </div>
      </div>
      <div className={ClassRowStyles.courses}>
        <div>
          Liste des Matières :{" "}
          {courses.map((course) => course.courseName).join(", ")}
        </div>
      </div>
      <div className={ClassRowStyles.students}>
        <div>
          Liste des Professors :{" "}
          {professors.map((professor) => professor.lastName).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default ClassRow;
