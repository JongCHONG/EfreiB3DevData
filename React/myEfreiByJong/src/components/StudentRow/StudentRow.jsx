import React from "react";

import StudentRowStyles from "./StudentRow.module.scss"

const StudentRow = ({ name, sex, age, classe }) => {
  return (
    <tr className={StudentRowStyles.row}>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{age}</td>
      <td>{classe}</td>
      <td>Modifier</td>
    </tr>
  );
};

export default StudentRow;
