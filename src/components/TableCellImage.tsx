/** @jsxImportSource @emotion/react */
import React from "react";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormContext } from "../context/FormContext";

interface TableCellImageProps {
  table: "candidates";
  column: "image";
  index: number;
}

export default function TableCellImage({
  table,
  column,
  index,
}: TableCellImageProps) {
  const { register, resetField } = useFormContext();

  return (
    <TableCell sx={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="image-button-file">
        <input
          {...register(`${table}.${index}.${column}`)}
          accept="image/*"
          id="image-button-file"
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
        onClick={() => resetField(`${table}.${index}.${column}`)}
      >
        <DeleteIcon />
      </IconButton>
    </TableCell>
  );
}
