import React, { useState, useEffect } from "react";

import {
  fetchStudents,
  deleteStudent,
} from "../../controllers/studentsControllers";

import StudentsListStyles from "./StudentsList.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

const StudentsList = () => {
  const [studentsList, setStudentsList] = useState();
  const [deleted, setDeleted] = useState();

  const getStudentsList = async () => {
    const data = await fetchStudents();
    setStudentsList(data);
  };

  useEffect(() => {
    getStudentsList();
  }, [deleted]);

  if (!studentsList) {
    return <h1>Chargement...</h1>;
  }

  const handleDelete = async (_id) => {
    const data = await deleteStudent(_id);
    if (data) {
      setDeleted("Supprimer");
    }
  };

  console.log(studentsList);
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
            <th>Modifier/Retirer</th>
          </tr>
          <tr className={StudentsListStyles.separator} />
        </thead>
        <tbody>
          <tr className={StudentsListStyles.separator} />
          {studentsList.map((student) => {
            return (
              <tr className={StudentsListStyles.row}>
                <td>{student.name}</td>
                <td>{student.sex}</td>
                <td>{student.age}</td>
                <td>{student.class.className}</td>
                <td>
                  <MdEditNote /> /
                  <MdDelete
                    size={16}
                    onMouseOver={({ target }) => (target.style.color = "red")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                    className={StudentsListStyles.delete}
                    onClick={() => handleDelete(student._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
