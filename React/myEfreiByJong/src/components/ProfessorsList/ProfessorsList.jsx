import React, { useState, useEffect } from "react";

import ProfessorListStyles from "./ProfessorsList.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

import { fetchProfessors, deleteProfessor } from "../../controllers/professorsControllers";

const ProfessorsList = () => {
  const [professorsList, setProfessorsList] = useState();
  const [deleted, setDeleted] = useState();

  const getProfessorsList = async () => {
    const data = await fetchProfessors();
    setProfessorsList(data);
  };

  useEffect(() => {
    getProfessorsList();
  }, [deleted]);

  const handleDelete = async (_id) => {
    const data = await deleteProfessor(_id);
    if (data) {
      setDeleted("Supprimer");
    }
  };

  if (!professorsList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <>
      <div className={ProfessorListStyles.title}>Liste des professors</div>
      <div className={ProfessorListStyles.professorContainer}>
        {professorsList.map((professor) => {
          return (
            <div className={ProfessorListStyles.professor}>
              <div className={ProfessorListStyles.professorInfos}>
                <div>
                  <div>Nom : {professor.lastName}</div>
                  <div>Matière enseigné : {professor.course_id.courseName}</div>
                  <div>Email : {professor.email}</div>
                </div>
                <div>
                  <MdEditNote />
                  <MdDelete
                    size={16}
                    onMouseOver={({ target }) => (target.style.color = "red")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                    className={ProfessorListStyles.delete}
                    onClick={() => handleDelete(professor._id)}
                  />
                </div>
              </div>
              <div className={ProfessorListStyles.classes}>
                {professor.classes.map((classe) => (
                  <div className={ProfessorListStyles.classe}>
                    {classe.className}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfessorsList;
