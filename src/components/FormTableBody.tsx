/** @jsxImportSource @emotion/react */
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import TableCellImage from "./TableCellImage";
import { useFormContext } from "../context/FormContext";
import { useTableContext } from "../context/TableContext";

export default function FormTableBody() {
  const { register } = useFormContext();
  const { tableName, rowsNumber, rows } = useTableContext();

  let resultRows = [];

  for (let i = 0; i < rowsNumber; i++) {
    const item = (
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {rows.map((row) => {
          if (row === "image") {
            return (
              <TableCellImage
                key={`${row}-${i}`}
                table="candidates"
                index={i}
                column="image"
              />
            );
          }
          if (
            tableName === "candidates" &&
            (row === "description" || row === "name")
          ) {
            return (
              <TableCell key={`${row}-${i}`}>
                <TextField
                  {...register(`${tableName}.${i}.${row}`, { required: true })}
                  id="outlined-basic"
                  fullWidth
                  size="small"
                />
              </TableCell>
            );
          }
          if (
            tableName === "voters" &&
            (row === "id" ||
              row === "name" ||
              row === "email" ||
              row === "wallet")
          ) {
            return (
              <TableCell key={`${row}-${i}`}>
                <TextField
                  {...register(`${tableName}.${i}.${row}`, { required: true })}
                  id="outlined-basic"
                  fullWidth
                  size="small"
                />
              </TableCell>
            );
          }
          return null;
        })}
      </TableRow>
    );
    resultRows.push(item);
  }
  return <TableBody>{resultRows}</TableBody>;
}
