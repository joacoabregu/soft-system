/** @jsxImportSource @emotion/react */
import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormTableBody from "./FormTableBody";
import { useFormContext } from "../context/FormContext";

export default function FormTable() {
  const { columns } = useFormContext();

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

        <FormTableBody />
      </Table>
    </TableContainer>
  );
}
