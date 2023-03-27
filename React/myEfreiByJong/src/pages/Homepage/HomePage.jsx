import React from "react";

import TemplateCard from "../../components/TemplateCard/TemplateCard";

import TemplateBackground from "../../components/TemplateBackground/TemplateBackground";
import HomePageStyles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <TemplateBackground>
      <TemplateCard>
        <div className={HomePageStyles.container}>Bienvenue à l'Efrei</div>
      </TemplateCard>
    </TemplateBackground>
  );
};

export default HomePage;
