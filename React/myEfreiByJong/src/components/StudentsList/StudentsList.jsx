import React, { useState, useEffect } from "react";
import TableRow from "../TableRow/TableRow";

import StudentsListStyles from "./StudentsList.module.scss";

const StudentsList = () => {
  const [studentsList, setStudentsList] = useState();

  const getStudentsList = async () => {
    const response = await fetch(`http://localhost:4000/students/list`, {
      credentials: "include",
    });
    const data = await response.json();
    if (data.error) {
      // navigate('/login')
    } else {
      setStudentsList(data);
    }
  };

  useEffect(() => {
    getStudentsList();
  }, []);

  if (!studentsList) {
    return <h1>Chargement...</h1>;
  }

  console.log("studentsList", studentsList);
  return (
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
            <TableRow
              name={student.name}
              sex={student.sex}
              age={student.age}
              classe={student.class}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentsList;
