import React from "react";

import StudentForm from "../../components/StudentForm/StudentForm";
import ProfessorForm from "../../components/ProfessorForm/ProfessorForm";
import ClassCourseForm from "../../components/ClassCourseForm/ClassCourseForm";
import TemplateBackground from "../../components/TemplateBackground/TemplateBackground";

const CreationPage = ({ create }) => {
  return (
    <TemplateBackground>
      {create === "student" && <StudentForm />}
      {create === "professor" && <ProfessorForm />}
      {create === "classCourse" && <ClassCourseForm />}
    </TemplateBackground>
  );
};

export default CreationPage;
