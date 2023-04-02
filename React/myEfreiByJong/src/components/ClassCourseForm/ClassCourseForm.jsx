import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TemplateCard from "../TemplateCard/TemplateCard";
import Button from "../Button/Button";

import ClassCourseFormStyles from "../ClassCourseForm/ClassCourseForm.module.scss";

import { addClass, addCourse } from "../../controllers/classCourseControllers";
import { fetchClasses } from "../../controllers/classesControllers";

const ClassCourseForm = () => {
  const [classesList, setClassesList] = useState();
  const [message, setMessage] = useState();

  const getClassesList = async () => {
    const classes = await fetchClasses();
    setClassesList(classes);
  };

  useEffect(() => {
    getClassesList();
  }, [message]);

  const formikClass = useFormik({
    initialValues: {
      classe: "",
    },
    onSubmit: async (values) => {
      const reponse = await addClass(values);
      if (reponse) {
        setMessage(reponse);
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      classe: Yup.string().required("Choisir un nom pour la classe"),
    }),
  });

  const formikCourse = useFormik({
    initialValues: {
      course: "",
      class_id: ""
    },
    onSubmit: async (values) => {
      const reponse = await addCourse(values);
      if (reponse) {
        setMessage(reponse);
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      course: Yup.string().required("Choisir un nom pour la matière"),
      class_id: Yup.string().required("Choisir une classe"),
    }),
  });

  if (formikClass.errors.classe || formikCourse.errors.course) {
    setMessage(formikClass.errors.classe || formikCourse.errors.course);
    formikClass.setErrors({});
    formikCourse.setErrors({});
  }

  if (!classesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <TemplateCard>
      <div className={ClassCourseFormStyles.container}>
        <div className={ClassCourseFormStyles.image} />
        <div className={ClassCourseFormStyles.classCourseform}>
          {message}
          <form onSubmit={formikClass.handleSubmit}>
            <div className={ClassCourseFormStyles.form}>
              <label>Fonder une classe</label>
              <input
                type="text"
                name="classe"
                placeholder="Nom de la classe"
                onChange={formikClass.handleChange}
                value={formikClass.values.classe}
                error={formikClass.errors.classe}
              />
              <Button text="Fonder" />
            </div>
          </form>
          <form onSubmit={formikCourse.handleSubmit}>
            <div className={ClassCourseFormStyles.form}>
              <label>Inventer une Matière</label>
              <input
                type="text"
                name="course"
                placeholder="Nom de la matière"
                onChange={formikCourse.handleChange}
                value={formikCourse.values.course}
                error={formikCourse.errors.course}
              />
            </div>
            <div className={ClassCourseFormStyles.form}>
              <select
                name="class_id"
                value={formikCourse.values.class_id}
                onChange={formikCourse.handleChange}
                className={ClassCourseFormStyles.select}
              >
                <option value="" selected hidden>
                  Selectionner une classe
                </option>
                {classesList.map((class_id) => (
                  <option value={class_id._id}>{class_id.className}</option>
                ))}
              </select>
              <div className={ClassCourseFormStyles.error}>
                {formikCourse.errors.class_id}
              </div>
            <Button text="Inventer" />
            </div>
          </form>
        </div>
      </div>
    </TemplateCard>
  );
};

export default ClassCourseForm;
