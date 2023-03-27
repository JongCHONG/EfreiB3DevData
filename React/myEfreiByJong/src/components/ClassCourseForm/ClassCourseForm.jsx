import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TemplateCard from "../TemplateCard/TemplateCard";
import Button from "../Button/Button";

import ClassCourseFormStyles from "../ClassCourseForm/ClassCourseForm.module.scss";

const ClassCourseForm = () => {
  const [message, setMessage] = useState();

  const formikClass = useFormik({
    initialValues: {
      classe: "",
    },
    onSubmit: (values) => {
      addClass(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      classe: Yup.string().required("Choisir un nom"),
    }),
  });

  const addClass = async (values) => {
    const { classe } = values;

    const response = await fetch("http://localhost:4000/classes", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        className: classe,
      }),
    });
    if (response.status === 200) {
      setMessage("Class ajouté!");
    }
  };

  const formikCourse = useFormik({
    initialValues: {
      course: "",
    },
    onSubmit: (values) => {
      // addStudent(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      course: Yup.string().required("Choisir un nom"),
    }),
  });

  if (formikClass?.errors?.classe || formikClass?.errors?.course) {
    setMessage(formikClass?.errors?.classe || formikClass?.errors?.course);
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
              {formikClass.errors.classe}
              <input
                type="text"
                name="classe"
                placeholder="Nom de la classe"
                onChange={formikClass.handleChange}
                value={formikClass.values.classe}
                error={formikClass.errors.classe}
              />
              <Button />
            </div>
          </form>
          <form onSubmit={formikCourse.handleSubmit}>
            <div className={ClassCourseFormStyles.form}>
              <label>Inventer une Matière</label>
              {formikCourse.errors.course}
              <input
                type="text"
                name="course"
                placeholder="Nom de la matière"
                onChange={formikCourse.handleChange}
                value={formikCourse.values.course}
                error={formikCourse.errors.course}
              />
              <Button />
            </div>
          </form>
        </div>
      </div>
    </TemplateCard>
  );
};

export default ClassCourseForm;
