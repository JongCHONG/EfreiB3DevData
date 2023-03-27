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
          <div class="link link--thebe" onMouseOver={handleMouseOut}>
            Accueil
          </div>
        </Link>
        <div class="link link--dia" onMouseOver={handleMouseOverList}>
          Listes
        </div>
        <Link to="/createStudent">
          <div
            class="link link--io"
            onMouseOver={handleMouseOverStudentsProfessors}
          >
            étudiant/professor
          </div>
        </Link>
        <Link to="/createProfessor">
          <div
            class="link link--elara"
            onMouseOver={handleMouseOverClassesCourses}
          >
            classe/matière{" "}
          </div>
        </Link>
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
        <ol class={MenuStyles.studentsProfessorsMenu} onMouseLeave={handleMouseOut}>
          <li>
            <Link to="/list/students">Imaginer un étudiant</Link>
          </li>
          <li>
            <Link to="/list/students">Concevoir un Professor</Link>
          </li>
        </ol>
      )}
      {showClassesCoursesMenu && (
        <ol class={MenuStyles.classesCoursesMenu} onMouseLeave={handleMouseOut}>
          <li>
            <Link to="/list/students">Fonder une Classe</Link>
          </li>
          <li>
            <Link to="/list/students">Inventer une Matière</Link>
          </li>
        </ol>
      )}
    </>
  );
};

export default Menu;
