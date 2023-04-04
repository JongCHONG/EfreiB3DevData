import React, { useState, useEffect } from "react";

import CoursesListStyles from "./CoursesList.module.scss";
import { MdDelete, MdEditNote } from "react-icons/md";

import { fetchCourses, deleteCourse } from "../../controllers/coursesControllers";

const CoursesList = () => {
  const [coursesList, setCoursesList] = useState();
  const [deleted, setDeleted] = useState();

  const getCoursesList = async () => {
    const data = await fetchCourses();
    setCoursesList(data);
  };

  useEffect(() => {
    getCoursesList();
  }, [deleted]);

  const handleDelete = async (_id) => {
    const data = await deleteCourse(_id);
    if (data) {
      setDeleted("Class supprimée");
    }
  };

  if (!coursesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
      <div className={CoursesListStyles.title}>Liste des matières</div>
      <table className={CoursesListStyles.table}>
        <thead>
          <tr>
            <th className={CoursesListStyles.th}>Matiere</th>
            <th className={CoursesListStyles.th}>Professors</th>
            <th className={CoursesListStyles.th}>Classes</th>
            <th className={CoursesListStyles.th}>Modifier</th>
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
              <td className={CoursesListStyles.td}>
                <MdEditNote />
                <MdDelete
                  size={16}
                  onMouseOver={({ target }) => (target.style.color = "red")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                  className={CoursesListStyles.delete}
                  onClick={() => handleDelete(course._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
