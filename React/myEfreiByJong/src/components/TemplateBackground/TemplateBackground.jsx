import React from 'react';

import TemplateBackgroundStyles from './TemplateBackground.module.scss'

const TemplateBackground = ({children}) => {
  return (
    <main className={TemplateBackgroundStyles.background}>
      <div className={TemplateBackgroundStyles.opacity}>
        <div className={TemplateBackgroundStyles.title}>my Efrei By Jong</div>
        {children}
      </div>
    </main>
  );
};

export default TemplateBackground;