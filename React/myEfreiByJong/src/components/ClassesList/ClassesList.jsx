import React, { useEffect, useState } from "react";

import ClassesListStyles from "./ClassesList.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

import {
  fetchClasses,
  deleteClass,
} from "../../controllers/classesControllers";

const ClassesList = () => {
  const [classesList, setClassesList] = useState();
  const [deleted, setDeleted] = useState();

  const getClassesList = async () => {
    const data = await fetchClasses();
    setClassesList(data);
  };

  useEffect(() => {
    getClassesList();
  }, [deleted]);

  const handleDelete = async (_id) => {
    const data = await deleteClass(_id);
    if (data) {
      setDeleted("Class supprimée");
    }
  };

  if (!classesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <>
      <div className={ClassesListStyles.title}>Liste des classes</div>
      <div className={ClassesListStyles.classContainer}>
        {classesList.map((classe) => {
          return (
            <div className={ClassesListStyles.classes}>
              <div className={ClassesListStyles.classesInfos}>
                <div>
                  <div>Class : {classe.className}</div>
                  <div className={ClassesListStyles.students}>
                    <div>
                      Liste des étudiants :{" "}
                      {classe.students
                        .map((student) => student.name)
                        .join(", ")}
                    </div>
                  </div>
                  <div className={ClassesListStyles.courses}>
                    <div>
                      Liste des Matières :{" "}
                      {classe.courses
                        .map((course) => course.courseName)
                        .join(", ")}
                    </div>
                  </div>
                  <div className={ClassesListStyles.students}>
                    <div>
                      Liste des Professors :{" "}
                      {classe.professors
                        .map((professor) => professor.lastName)
                        .join(", ")}
                    </div>
                  </div>
                </div>
                <div>
                  <MdEditNote />
                  <MdDelete
                    size={16}
                    onMouseOver={({ target }) => (target.style.color = "red")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                    className={ClassesListStyles.delete}
                    onClick={() => handleDelete(classe._id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClassesList;
