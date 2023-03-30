import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import TemplateCard from "../TemplateCard/TemplateCard";

import { fetchClasses } from "../../controllers/classesControllers";

import StudentFormStyles from "./StudentForm.module.scss";

const StudentForm = () => {
  const [classesList, setClassesList] = useState();

  const getClassesList = async () => {
    const data = await fetchClasses();
    setClassesList(data);
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
    onSubmit: (values) => {
      addStudent(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Nom requis"),
      sex: Yup.string().required("Sex requis"),
      age: Yup.string().required("Age requis"),
      classe: Yup.string().required("Class requis"),
    }),
  });

  const addStudent = async (values) => {
    console.log(values);

    const { name, sex, age, classe } = values;

    const response = await fetch("http://localhost:4000/students", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        sex,
        age,
        class: classe,
      }),
    });

    const student = await response.json();
  };

  if (!classesList) {
    return <h1>Chargement...</h1>;
  }

  console.log(formik.values);
  return (
    <TemplateCard>
      <div className={StudentFormStyles.container}>
        <div className={StudentFormStyles.title}>Ajouter un étudiant</div>
          <div className={StudentFormStyles.image} />
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.errors.name}
                />
                {formik.errors.name}
              </div>
              <div>
                <input
                  type="text"
                  name="sex"
                  placeholder="Sex"
                  onChange={formik.handleChange}
                  value={formik.values.sex}
                  error={formik.errors.sex}
                />
                {formik.errors.sex}
              </div>
              <div>
                <input
                  type="number"
                  name="age"
                  min={1}
                  placeholder="Age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  error={formik.errors.age}
                />
                {formik.errors.age}
              </div>
              <select
                name="classe"
                value={formik.values.classe}
                onChange={formik.handleChange}
              >
                <option value="" selected hidden>
                  Selectionner une classe
                </option>
                {classesList.map((classe) => (
                  <option value={classe._id}>{classe.className}</option>
                ))}
              </select>
              {formik.errors.classe}

              <Button text="Imaginer" />
            </form>
          </div>
        </div>
    </TemplateCard>
  );
};

export default StudentForm;
