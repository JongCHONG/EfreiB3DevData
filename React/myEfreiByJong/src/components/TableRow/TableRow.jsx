import React from "react";

import TableRowStyles from "./TableRow.module.scss"

const TableRow = ({ name, sex, age, classe }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{age}</td>
      <td>{classe}</td>
      <td>Modifier</td>
    </tr>
  );
};

export default TableRow;
