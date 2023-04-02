import React, { useState, useEffect } from "react";

import StudentTableRow from "../StudentRow/StudentRow";

import { fetchStudents } from "../../controllers/studentsControllers";

import StudentsListStyles from "./StudentsList.module.scss";

const StudentsList = () => {
  const [studentsList, setStudentsList] = useState();

  const getStudentsList = async () => {
    const data =  await fetchStudents();
    setStudentsList(data)
  };

  useEffect(() => {
    getStudentsList();
  }, []);

  if (!studentsList) {
    return <h1>Chargement...</h1>;
  }

  console.log("studentsList", studentsList);
  return (
    <>
      <div className={StudentsListStyles.title}>Liste des Etudiants</div>
      <table className={StudentsListStyles.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Classe</th>
            <th>Modifier</th>
          </tr>
          <tr className={StudentsListStyles.separator} />
        </thead>
        <tbody>
          <tr className={StudentsListStyles.separator} />
          {studentsList.map((student) => {
            return (
              <StudentTableRow
                name={student.name}
                sex={student.sex}
                age={student.age}
                classe={student.class.className}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
