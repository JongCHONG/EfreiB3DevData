import React from "react";

import ProfessorRowStyle from "./ProfessorRow.module.scss";

const ProfessorRow = ({ professor }) => {
  const { lastName, course_id, email, classes } = professor;
  return (
    <div className={ProfessorRowStyle.professorContainer}>
      <div>Nom : {lastName}</div>
      <div>Matière enseigné : {course_id.courseName}</div>
      <div>Email : {email}</div>
      <div className={ProfessorRowStyle.classes}>
        {classes.map((classe) => (
          <div className={ProfessorRowStyle.classe}>{classe.className}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfessorRow;
