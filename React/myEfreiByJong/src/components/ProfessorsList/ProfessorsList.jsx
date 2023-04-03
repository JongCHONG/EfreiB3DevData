import React, { useState, useEffect } from 'react';

import ProfessorListStyles from "./ProfessorsList.module.scss"

import { fetchProfessors } from '../../controllers/professorsControllers';

import ProfessorRow from '../ProfessorRow/ProfessorRow';

const ProfessorsList = () => {
  const [professorsList, setProfessorsList] = useState()

  const getProfessorsList = async () => {
    const data =  await fetchProfessors();
    setProfessorsList(data)
  };

  useEffect(() => {
    getProfessorsList();
  }, []);

  if (!professorsList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <>
      <div className={ProfessorListStyles.title}>Liste des professors</div>
      <div className={ProfessorListStyles.professors}>
        {professorsList.map((professor) => {
          return <ProfessorRow professor={professor} />;
        })}
      </div>
    </>
  );
};

export default ProfessorsList;