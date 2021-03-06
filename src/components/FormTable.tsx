/** @jsxImportSource @emotion/react */
import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormTableBody from "./FormTableBody";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTableContext } from "../context/TableContext";
import { useTheme } from "@mui/material/styles";

export default function FormTable() {
  const { title, columns, setRowsNumber, rowsNumber } = useTableContext();
  const {
    palette: { primary, background },
  } = useTheme();
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1em",
        }}
      >
        <Typography
          sx={{
            color: primary.main,
            fontWeight: "600",
          }}
        >
          {title}{" "}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setRowsNumber(rowsNumber + 1)}
        >
          <AddIcon />
        </Button>
      </Grid>
      <TableContainer component={Paper} sx={{ marginBottom: "1em" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: background.default }}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={column}
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <FormTableBody />
        </Table>
      </TableContainer>
    </>
  );
}
