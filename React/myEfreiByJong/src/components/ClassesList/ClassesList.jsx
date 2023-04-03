import React, { useEffect, useState } from "react";

import ClassesListStyles from "./ClassesList.module.scss";

import ClassRow from "../ClassRow/ClassRow";

import { fetchClasses } from "../../controllers/classesControllers";

const ClassesList = () => {
  const [classesList, setClassesList] = useState();

  const getClassesList = async () => {
    const data = await fetchClasses();
    setClassesList(data);
  };

  useEffect(() => {
    getClassesList();
  }, []);

  if (!classesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <>
      <div className={ClassesListStyles.title}>Liste des classes</div>
      <div className={ClassesListStyles.classes}>
        {classesList.map((classe) => {
          return <ClassRow classe={classe} />;
        })}
      </div>
    </>
  );
};

export default ClassesList;
