import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import EditStudentFormStyles from "./EditStudentForm.module.scss";

import Button from "../Button/Button";

import { fetchClasses } from "../../controllers/classesControllers";

import { updateStudentById } from "../../controllers/studentsControllers";

const EditStudentForm = ({ isOpen, onClose, children, student }) => {
  const [classesList, setClassesList] = useState();
  const { name, sex, age, _id } = student;

  const getClassesList = async () => {
    const response = await fetchClasses();
    setClassesList(response);
  };

  useEffect(() => {
    getClassesList();
  }, []);

  const formik = useFormik({
    initialValues: {
      name,
      sex,
      age,
      classe: student.class._id,
    },
    onSubmit: async (values) => {
      const { name, sex, age, classe } = student;
      const reponse = await updateStudentById(values, _id);
      if (reponse) {
        formik.setValues({
          name,
          sex,
          age,
          classe
        });
      }
      onClose();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Nom requis"),
      sex: Yup.string().required("Sex requis"),
      age: Yup.string().required("Age requis"),
      classe: Yup.string().required("Class requis"),
    }),
  });

  const modalStyles = {
    display: isOpen ? "block" : "none",
  };

  const overlayStyles = {
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <div style={modalStyles} className={EditStudentFormStyles.modalStyles}>
        <form onSubmit={formik.handleSubmit}>
          <div className={EditStudentFormStyles.form}>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
            />
            <div className={EditStudentFormStyles.error}>{formik.errors.name}</div>
          </div>
          <div className={EditStudentFormStyles.form}>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              onChange={formik.handleChange}
              value={formik.values.sex}
              error={formik.errors.sex}
            />
            <div className={EditStudentFormStyles.error}>{formik.errors.sex}</div>
          </div>
          <div className={EditStudentFormStyles.form}>
            <input
              type="number"
              name="age"
              min={1}
              placeholder="Age"
              onChange={formik.handleChange}
              value={formik.values.age}
              error={formik.errors.age}
            />
            <div className={EditStudentFormStyles.error}>{formik.errors.age}</div>
          </div>
          <div className={EditStudentFormStyles.form}>
            <select
              name="classe"
              value={formik.values.classe}
              onChange={formik.handleChange}
              className={EditStudentFormStyles.select}
            >
              <option value="" hidden>
                Selectionner une classe
              </option>
              {classesList?.map((classe, index) => (
                <option key={index} value={classe._id}>
                  {classe.className}
                </option>
              ))}
            </select>
            <div className={EditStudentFormStyles.error}>{formik.errors.classe}</div>
          </div>
          <div className={EditStudentFormStyles.buttonMessage}>
            <Button text="Modifier" />
          </div>
        </form>
      </div>
      <div
        className={EditStudentFormStyles.overlay}
        style={overlayStyles}
        onClick={onClose}
      />
    </>
  );
};

export default EditStudentForm;
