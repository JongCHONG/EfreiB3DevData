import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TemplateCard from "../TemplateCard/TemplateCard";
import Button from "../Button/Button";

import ClassCourseFormStyles from "../ClassCourseForm/ClassCourseForm.module.scss";

import { addClass, addCourse } from "../../controllers/classCourseControllers";

const ClassCourseForm = () => {
  const [message, setMessage] = useState();

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
    }),
  });

  if (formikClass.errors.classe || formikCourse.errors.course) {
    setMessage(formikClass.errors.classe || formikCourse.errors.course);
    formikClass.setErrors({});
    formikCourse.setErrors({});
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
              <Button text="Fonder"/>
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
              <Button text="Inventer"/>
            </div>
          </form>
        </div>
      </div>
    </TemplateCard>
  );
};

export default ClassCourseForm;
