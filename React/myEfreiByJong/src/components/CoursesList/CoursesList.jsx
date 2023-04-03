import React, { useState, useEffect } from "react";

import CoursesListStyles from "./CoursesList.module.scss";

import { fetchCourses } from "../../controllers/coursesControllers";

const CoursesList = () => {
  const [coursesList, setCoursesList] = useState();

  const getCoursesList = async () => {
    const data = await fetchCourses();
    setCoursesList(data);
  };

  useEffect(() => {
    getCoursesList();
  }, []);

  if (!coursesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
      <div className={CoursesListStyles.title}>Liste des matières</div>
      <table className={CoursesListStyles.table}>
        <thead>
          <tr>
            <td className={CoursesListStyles.td}>Matiere</td>
            <td className={CoursesListStyles.td}>Professors</td>
            <td className={CoursesListStyles.td}>Classes</td>
          </tr>
        </thead>
        <tbody>
          {coursesList.map((course) => (
            <tr>
              <td className={CoursesListStyles.td}>{course.courseName}</td>
              <td className={CoursesListStyles.td}>
                {course.professors.map((professor) => (
                  <div>{professor.lastName}</div>
                ))}
              </td>
              <td className={CoursesListStyles.td}>
                {course.classes.map((classe) => (
                  <div>{classe.className}</div>
                ))}
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
