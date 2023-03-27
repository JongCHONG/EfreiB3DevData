import React from "react";

import StudentsList from "../../components/StudentsList/StudentsList";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import TemplateBackground from "../../components/TemplateBackground/TemplateBackground";

import ListPageStyles from "./ListPage.module.scss";

const ListPage = ({ list }) => {
  return (
    <TemplateBackground>
      <TemplateCard>
        <div className={ListPageStyles.container}>
          {list === "students" && <StudentsList />}
          {list === "professors" && "<ProfessorForm />"}
        </div>
      </TemplateCard>
    </TemplateBackground>
  );
};

export default ListPage;
