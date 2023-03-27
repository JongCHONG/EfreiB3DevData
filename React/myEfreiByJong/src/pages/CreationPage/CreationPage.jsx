import React from "react";

import StudentForm from "../../components/StudentForm/StudentForm";
import ProfessorForm from "../../components/ProfessorForm/ProfessorForm";
import TemplateBackground from "../../components/TemplateBackground/TemplateBackground";


const CreationPage = ({ create }) => {
  return (
<TemplateBackground>

    <div>
      {create === "student" && <StudentForm />}
      {create === "professor" && <ProfessorForm />}
    </div>
</TemplateBackground>
  );
};

export default CreationPage;
