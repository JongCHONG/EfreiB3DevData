import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";

import EditProfessorFormStyles from "./EditProfessorForm.module.scss";

import { fetchClasses } from "../../controllers/classesControllers";
import { fetchCourses } from "../../controllers/coursesControllers";
import { updateProfessorById } from "../../controllers/professorsControllers";

const EditProfessorForm = ({ isOpen, onClose, children, professor }) => {
  const [classesList, setClassesList] = useState();
  const [coursesList, setcoursesList] = useState();
  const { lastName, course_id, email } = professor;

  const getClassesCoursesList = async () => {
    const classes = await fetchClasses();
    setClassesList(classes);
    const courses = await fetchCourses();
    setcoursesList(courses);
  };

  useEffect(() => {
    getClassesCoursesList();
  }, []);

  const formik = useFormik({
    initialValues: {
      lastName,
      course: course_id,
      email,
      // classe: "",
    },
    onSubmit: async (values) => {
      const reponse = await updateProfessorById(values, professor._id);
      if (reponse) {
        formik.setValues({
          lastName: "",
          course: "",
          email: "",
          classe: "",
        });
      }
      onClose();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      lastName: Yup.string().required("Nom de famille requis"),
      course: Yup.string().required("Matière requis"),
      email: Yup.string().required("Email requis"),
      // classe: Yup.string().required("Class requis"),
    }),
  });

  if (!classesList || !coursesList) {
    return <h1>Chargement...</h1>;
  }

  const modalStyles = {
    display: isOpen ? "block" : "none",
  };

  const overlayStyles = {
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <div style={modalStyles} className={EditProfessorFormStyles.modalStyles}>
        <form onSubmit={formik.handleSubmit}>
          <div className={EditProfessorFormStyles.form}>
            <input
              type="text"
              name="lastName"
              placeholder="Nom de famille"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
            <div className={EditProfessorFormStyles.error}>
              {formik.errors.lastName}
            </div>
          </div>
          <div className={EditProfessorFormStyles.form}>
            <input
              type="email"
              name="email"
              min={1}
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
            />
            <div className={EditProfessorFormStyles.error}>
              {formik.errors.email}
            </div>
          </div>
          <div className={EditProfessorFormStyles.form}>
            <select
              name="course"
              value={formik.values.course}
              onChange={formik.handleChange}
              className={EditProfessorFormStyles.select}
            >
              <option value="" hidden>
                Selectionner une matière
              </option>
              {coursesList.map((course, index) => (
                <option key={index} value={course._id}>
                  {course.courseName}
                </option>
              ))}
            </select>
            <div className={EditProfessorFormStyles.error}>
              {formik.errors.course}
            </div>
          </div>
          <div className={EditProfessorFormStyles.buttonMessage}>
            <Button text="Modifier" />
          </div>
        </form>
      </div>
      <div
        className={EditProfessorFormStyles.overlay}
        style={overlayStyles}
        onClick={onClose}
      />
    </>
  );
};

export default EditProfessorForm;
