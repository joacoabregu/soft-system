/** @jsxImportSource @emotion/react */
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormTableBodyProps } from "../types/interfaces";

export default function FormTableBody({
  rows,
  register,
  resetField,
}: FormTableBodyProps) {
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
  return resultRows;
}
