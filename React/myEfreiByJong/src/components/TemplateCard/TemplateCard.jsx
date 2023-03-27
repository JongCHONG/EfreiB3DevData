import React from "react";

import Menu from "../Menu/Menu";

import TemplateCardStyles from "./TemplateCard.module.scss";

const TemplateCard = ({ children }) => {
  return (
    <div className={TemplateCardStyles.card}>
        <div className={TemplateCardStyles.container}>
        <Menu />

        {children}
      </div>
    </div>
  );
};

export default TemplateCard;
