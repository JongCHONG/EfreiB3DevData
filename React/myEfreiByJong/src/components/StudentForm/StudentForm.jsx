import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import TemplateCard from "../TemplateCard/TemplateCard";

import { fetchClasses } from "../../controllers/classesControllers";
import { addStudent } from "../../controllers/studentsControllers";

import StudentFormStyles from "./StudentForm.module.scss";

const StudentForm = () => {
  const [classesList, setClassesList] = useState();
  const [message, setMessage] = useState();

  const getClassesList = async () => {
    const classes = await fetchClasses();
    setClassesList(classes);
  };

  useEffect(() => {
    getClassesList();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      sex: "",
      age: "",
      classe: "",
    },
    onSubmit: async (values) => {
      const reponse = await addStudent(values);
      if (reponse) {
        setMessage(reponse);
        formik.setValues({
          name: "",
          sex: "",
          age: "",
          classe: "",
        });
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Nom requis"),
      sex: Yup.string().required("Sex requis"),
      age: Yup.string().required("Age requis"),
      classe: Yup.string().required("Class requis"),
    }),
  });

  if (!classesList) {
    return <h1>Chargement...</h1>;
  }

  return (
    <TemplateCard>
      <div className={StudentFormStyles.container}>
        <div className={StudentFormStyles.title}>Ajouter un étudiant</div>
        <div className={StudentFormStyles.image} />
        <form onSubmit={formik.handleSubmit}>
          <div className={StudentFormStyles.form}>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
            />
            <div className={StudentFormStyles.error}>{formik.errors.name}</div>
          </div>
          <div className={StudentFormStyles.form}>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              onChange={formik.handleChange}
              value={formik.values.sex}
              error={formik.errors.sex}
            />
            <div className={StudentFormStyles.error}>{formik.errors.sex}</div>
          </div>
          <div className={StudentFormStyles.form}>
            <input
              type="number"
              name="age"
              min={1}
              placeholder="Age"
              onChange={formik.handleChange}
              value={formik.values.age}
              error={formik.errors.age}
            />
            <div className={StudentFormStyles.error}>{formik.errors.age}</div>
          </div>
          <div className={StudentFormStyles.form}>
            <select
              name="classe"
              value={formik.values.classe}
              onChange={formik.handleChange}
              className={StudentFormStyles.select}
            >
              <option value="" selected hidden>
                Selectionner une classe
              </option>
              {classesList.map((classe) => (
                <option value={classe._id}>{classe.className}</option>
              ))}
            </select>
            <div className={StudentFormStyles.error}>
              {formik.errors.classe}
            </div>
          </div>
          <div className={StudentFormStyles.buttonMessage}>
            <Button text="Imaginer" />
            <div className={StudentFormStyles.message}>{message}</div>
          </div>
        </form>
      </div>
    </TemplateCard>
  );
};

export default StudentForm;
