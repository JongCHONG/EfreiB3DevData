import React from "react";

import TemplateCard from "../../components/TemplateCard/TemplateCard";
import StudentsList from "../../components/StudentsList/StudentsList";
import ProfessorsList from "../../components/ProfessorsList/ProfessorsList";
import ClassesList from "../../components/ClassesList/ClassesList";
import CoursesList from "../../components/CoursesList/CoursesList";
import TemplateBackground from "../../components/TemplateBackground/TemplateBackground";

import ListPageStyles from "./ListPage.module.scss";

const ListPage = ({ list }) => {
  return (
    <TemplateBackground>
      <TemplateCard>
        <div className={ListPageStyles.container}>
          {list === "students" && <StudentsList />}
          {list === "professors" && <ProfessorsList />}
          {list === "classes" && <ClassesList />}
          {list === "courses" && <CoursesList />}
        </div>
      </TemplateCard>
    </TemplateBackground>
  );
};

export default ListPage;
