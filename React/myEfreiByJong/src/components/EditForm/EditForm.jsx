import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import EditFormStyles from "./EditForm.module.scss";

import Button from "../Button/Button";

import { fetchClasses } from "../../controllers/classesControllers";

const EditForm = ({ isOpen, onClose, children, student }) => {
  const [classesList, setClassesList] = useState();
  const [message, setMessage] = useState();
  const { name, sex, age } = student;

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
      classe: student.class._id
    },
    onSubmit: async (values) => {
      // const reponse = await addStudent(values);
      // if (reponse) {
      //   setMessage(reponse);
      //   formik.setValues({
      //     name: "",
      //     sex: "",
      //     age: "",
      //     classe: "",
      //   });
      // }
      onClose()
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
      <div style={modalStyles} className={EditFormStyles.modalStyles}>
        <form onSubmit={formik.handleSubmit}>
          <div className={EditFormStyles.form}>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
            />
            <div className={EditFormStyles.error}>{formik.errors.name}</div>
          </div>
          <div className={EditFormStyles.form}>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              onChange={formik.handleChange}
              value={formik.values.sex}
              error={formik.errors.sex}
            />
            <div className={EditFormStyles.error}>{formik.errors.sex}</div>
          </div>
          <div className={EditFormStyles.form}>
            <input
              type="number"
              name="age"
              min={1}
              placeholder="Age"
              onChange={formik.handleChange}
              value={formik.values.age}
              error={formik.errors.age}
            />
            <div className={EditFormStyles.error}>{formik.errors.age}</div>
          </div>
          <div className={EditFormStyles.form}>
            <select
              name="classe"
              value={formik.values.classe}
              onChange={formik.handleChange}
              className={EditFormStyles.select}
            >
              <option value="" hidden>
                Selectionner une classe
              </option>
              {classesList?.map((classe, index) => (
                <option key={index} value={classe._id}>{classe.className}</option>
              ))}
            </select>
            <div className={EditFormStyles.error}>{formik.errors.classe}</div>
          </div>
          <div className={EditFormStyles.buttonMessage}>
            <Button text="Modifier"/>
            <div className={EditFormStyles.message}>{message}</div>
          </div>
        </form>
      </div>
      <div
        className={EditFormStyles.overlay}
        style={overlayStyles}
        onClick={onClose}
      />
    </>
  );
};

export default EditForm;
