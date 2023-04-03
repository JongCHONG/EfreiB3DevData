import React from "react";

import StudentRowStyles from "./StudentTableRow.module.scss";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

const StudentTableRow = ({ name, sex, age, classe }) => {
  return (
    <tr className={StudentRowStyles.row}>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{age}</td>
      <td>{classe}</td>
      <td>
        <MdEditNote/> / <MdDeleteForever />
      </td>
    </tr>
  );
};

export default StudentTableRow;
