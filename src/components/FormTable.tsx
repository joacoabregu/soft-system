/** @jsxImportSource @emotion/react */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormTableProps } from "../types/interfaces";

export default function FormTable({
  columns,
  rows,
  resetField,
  register,
}: FormTableProps) {
  let resultRows = [];

  for (let i = 0; i < rows; i++) {
    const item = (
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <TextField
            {...register(`candidates.${i}.name`, { required: true })}
            id="outlined-basic"
            fullWidth
            size="small"
          />
        </TableCell>
        <TableCell>
          <TextField
            {...register(`candidates.${i}.description`, { required: true })}
            id="outlined-basic"
            fullWidth
            size="small"
          />
        </TableCell>
        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="contained-button-file">
            <input
              {...register(`candidates.${i}.image`)}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              css={{ display: "none" }}
            />
            <Button variant="contained" component="span" size="small">
              Imagen
            </Button>
          </label>
          <IconButton
            aria-label="delete"
            onClick={() => resetField(`candidates.${i}.image`)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );

    resultRows.push(item);
  }

  return (
    <TableContainer component={Paper} sx={{ marginBottom: "1em" }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell key={column} align="center" sx={{ fontWeight: 700 }}>
                  {column}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{resultRows}</TableBody>
      </Table>
    </TableContainer>
  );
}
