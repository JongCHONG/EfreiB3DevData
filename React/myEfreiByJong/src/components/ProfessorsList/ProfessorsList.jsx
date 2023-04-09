import React, { useState, useEffect } from "react";

import ProfessorListStyles from "./ProfessorsList.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

import { fetchProfessors, deleteProfessor, getProfessorById } from "../../controllers/professorsControllers";

import EditProfessorForm from "../EditProfessorForm/EditProfessorForm";

const ProfessorsList = () => {
  const [professorsList, setProfessorsList] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleted, setDeleted] = useState();
  const [professor, setProfessor] = useState();

  const getProfessorsList = async () => {
    const data = await fetchProfessors();
    setProfessorsList(data);
  };

  useEffect(() => {
    getProfessorsList();
  }, [deleted, isModalOpen]);

  const handleDelete = async (_id) => {
    const data = await deleteProfessor(_id);
    if (data) {
      setDeleted("Supprimer");
    }
  };

  const handleOpenModal = async (id) => {
    const response = await getProfessorById(id);
    setProfessor(response);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProfessor("");
  };

  if (!professorsList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <>
      <div className={ProfessorListStyles.title}>Liste des professors</div>
      <div className={ProfessorListStyles.professorContainer}>
        {professorsList.map((professor, index) => {
          return (
            <div key={index} className={ProfessorListStyles.professor}>
              <div className={ProfessorListStyles.professorInfos}>
                <div>
                  <div>Nom : {professor.lastName}</div>
                  <div>Matière enseigné : {professor.course_id.courseName}</div>
                  <div>Email : {professor.email}</div>
                </div>
                <div>
                <MdEditNote
                    size={16}
                    onMouseOver={({ target }) => (target.style.color = "blue")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                    onClick={() => handleOpenModal(professor._id)}
                  />
                  /
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
                {professor.classes.map((classe, index) => (
                  <div key={index} className={ProfessorListStyles.classe}>
                    {classe.className}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {professor && (
        <EditProfessorForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          professor={professor}
        />
      )}
    </>
  );
};

export default ProfessorsList;
