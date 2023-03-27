import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuStyles from "./Menu.module.scss";
import "./LineHoverStyles.css";

const Menu = () => {
  const [showListsMenu, setShowListsMenu] = useState(false);
  const [showStudentsProfessorsMenu, setShowStudentsProfessorsMenu] =
    useState(false);
  const [showClassesCoursesMenu, setShowClassesCoursesMenu] = useState(false);

  const handleMouseOverList = () => {
    setShowListsMenu(true);
    setShowStudentsProfessorsMenu(false);
    setShowClassesCoursesMenu(false);
  };

  const handleMouseOverStudentsProfessors = () => {
    setShowListsMenu(false);
    setShowStudentsProfessorsMenu(true);
    setShowClassesCoursesMenu(false);
  };

  const handleMouseOverClassesCourses = () => {
    setShowListsMenu(false);
    setShowStudentsProfessorsMenu(false);
    setShowClassesCoursesMenu(true);
  };

  const handleMouseOut = () => {
    setShowListsMenu(false);
    setShowStudentsProfessorsMenu(false);
    setShowClassesCoursesMenu(false);
  };

  return (
    <>
      <div className={MenuStyles.menu}>
        <Link to="/">
          <div className="link link--thebe" onMouseOver={handleMouseOut}>
            Accueil
          </div>
        </Link>
        <div className="link link--dia" onMouseOver={handleMouseOverList}>
          Listes
        </div>
          <div
            className="link link--io"
            onMouseOver={handleMouseOverStudentsProfessors}
          >
            étudiant/professor
          </div>
        <div
          className="link link--elara"
          onMouseOver={handleMouseOverClassesCourses}
        >
          classe/matière{" "}
        </div>
      </div>
      {showListsMenu && (
        <ol onMouseLeave={handleMouseOut}>
          <li>
            <Link to="/list/students">Etudiants</Link>
          </li>
          <li>
            <Link to="/list/students">Professors</Link>
          </li>
          <li>
            <Link to="/list/students">Classes</Link>
          </li>
          <li>
            <Link to="/list/students">Matières</Link>
          </li>
        </ol>
      )}
      {showStudentsProfessorsMenu && (
        <ol
          className={MenuStyles.studentsProfessorsMenu}
          onMouseLeave={handleMouseOut}
        >
          <li>
            <Link to="/createStudent">Imaginer un étudiant</Link>
          </li>
          <li>
            <Link to="/list/students">Concevoir un Professor</Link>
          </li>
        </ol>
      )}
      {showClassesCoursesMenu && (
        <ol
          className={MenuStyles.classesCoursesMenu}
          onMouseLeave={handleMouseOut}
        >
          <li>
            <Link to="/createClassCourse">
              Fonder une Classe / Inventer une Matière
            </Link>
          </li>
        </ol>
      )}
    </>
  );
};

export default Menu;
