import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import TemplateCard from "../TemplateCard/TemplateCard";

import { fetchClasses } from "../../controllers/classesControllers";
import { fetchCourses } from "../../controllers/coursesControllers";
import { addProfessor } from "../../controllers/professorsControllers";

import ProfessorFormStyles from "./ProfessorForm.module.scss";

const ProfessorForm = () => {
  const [classesList, setClassesList] = useState();
  const [coursesList, setcoursesList] = useState();
  const [message, setMessage] = useState();

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
      lastName: "",
      course: "",
      email: "",
      classe: "",
    },
    onSubmit: async (values) => {
      const reponse = await addProfessor(values);
      if (reponse) {
        setMessage(reponse);
        formik.setValues({
          lastName: "",
          course: "",
          email: "",
          classe: "",
        });
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      lastName: Yup.string().required("Nom de famille requis"),
      course: Yup.string().required("Matière requis"),
      email: Yup.string().required("Email requis"),
      classe: Yup.string().required("Class requis"),
    }),
  });

  if (!classesList || !coursesList) {
    return <h1>Chargement...</h1>;
  }

  console.log(formik.values);
  return (
    <TemplateCard>
      <div className={ProfessorFormStyles.container}>
        <div className={ProfessorFormStyles.title}>Concevoir un Professor</div>
        <div className={ProfessorFormStyles.image} />
        <form onSubmit={formik.handleSubmit}>
          <div className={ProfessorFormStyles.form}>
            <input
              type="text"
              name="lastName"
              placeholder="Nom de famille"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
            <div className={ProfessorFormStyles.error}>
              {formik.errors.lastName}
            </div>
          </div>
          <div className={ProfessorFormStyles.form}>
            <input
              type="email"
              name="email"
              min={1}
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
            />
            <div className={ProfessorFormStyles.error}>
              {formik.errors.email}
            </div>
          </div>
          <div className={ProfessorFormStyles.form}>
            <select
              name="classe"
              value={formik.values.classe}
              onChange={formik.handleChange}
              className={ProfessorFormStyles.select}
            >
              <option value="" selected hidden>
                Selectionner une classe
              </option>
              {classesList.map((classe) => (
                <option value={classe._id}>{classe.className}</option>
              ))}
            </select>
            <div className={ProfessorFormStyles.error}>
              {formik.errors.classe}
            </div>
          </div>
          <div className={ProfessorFormStyles.form}>
            <select
              name="course"
              value={formik.values.course}
              onChange={formik.handleChange}
              className={ProfessorFormStyles.select}
            >
              <option value="" selected hidden>
                Selectionner une matière
              </option>
              {coursesList.map((course) => (
                <option value={course._id}>{course.courseName}</option>
              ))}
            </select>
            <div className={ProfessorFormStyles.error}>
              {formik.errors.course}
            </div>
          </div>
          <div className={ProfessorFormStyles.buttonMessage}>
            <Button text="Concevoir" />
            <div className={ProfessorFormStyles.message}>{message}</div>
          </div>
        </form>
      </div>
    </TemplateCard>
  );
};

export default ProfessorForm;
