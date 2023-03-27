import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";

const StudentForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      sex: "",
      age: "",
    },
    onSubmit: (values) => {
      addStudent(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Nom requis"),
    }),
  });

  const addStudent = async (values) => {
    console.log(values);

    const { name, sex, age } = values

    const response = await fetch('http://localhost:4000/students', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        sex,
        age
      })
    })

    const student = await response.json()

    if (student) {
      console.log(student.name);
    }

    if (student.error) {
      console.log("error");
    }

  }

  console.log(formik.values);
  return (
    <div>
      studentForm
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nom</label>
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
          <label>Sex</label>
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
          <label>Age</label>
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
        <Button />
      </form>
    </div>
  );
};

export default StudentForm;
