import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormTable from "../components/FormTable";
import Dialog from "../components/Dialog";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FormInput, TableContextValue } from "../types/interfaces";
import TextInput from "../components/TextInput";
import { FormContext } from "../context/FormContext";
import { TableContext } from "../context/TableContext";
import Divider from "@mui/material/Divider";

function Election() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    register,
    resetField,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = () => {
    if (isSubmitted) {
      setOpenDialog(true);
    }
    return;
  };

  const [rowsCandidates, setRowsCandidates] = React.useState<number>(1);
  const [rowsVoters, setRowsVoters] = React.useState<number>(1);

  const tableCandidates: TableContextValue = {
    tableName: "candidates",
    title: "Candidatos",
    rows: ["name", "description", "image"],
    columns: ["Nombre", "Descripción", "Imagen"],
    rowsNumber: rowsCandidates,
    setRowsNumber: setRowsCandidates,
  };
  const tableVoters: TableContextValue = {
    tableName: "voters",
    title: "Votantes",
    rows: ["id", "name", "email", "wallet"],
    columns: ["Id", "Nombre", "Email", "Billetera"],
    rowsNumber: rowsVoters,
    setRowsNumber: setRowsVoters,
  };

  const formContextValue = {
    control,
    register,
    resetField,
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "white", borderRadius: 2, padding: "1.5em" }}
    >
      <Typography variant="h1" gutterBottom={true} align="left">
        Crear Elección
      </Typography>
      <Divider />
      <FormContext.Provider value={formContextValue}>
        <Grid container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="title"
              label="Titulo"
              style={{ padding: "1em 0 1em 0" }}
            />

            <TextInput
              name="description"
              label="Descripción"
              style={{ padding: "1em 0 1em 0" }}
            />

            <Grid container>
              <Grid item xs={12} >
                <Typography
                  variant="body1"
                  sx={{ fontSize: 22 }}
                  gutterBottom
                  textAlign="left"
                >
                  Horario de Votación
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ padding: "0.2em" }}>
                <Typography variant="body1" gutterBottom>
                  Desde
                </Typography>
              </Grid>

              <TextInput
                name="date"
                label="Fecha"
                style={{ padding: "1em" }}
                xs={12}
                md={6}
              />
              <TextInput
                name="hour"
                label="Hora"
                style={{ padding: "1em" }}
                xs={12}
                md={6}
              />

              <Grid item xs={12} sx={{ padding: "0.2em" }}>
                <Typography variant="body1" gutterBottom>
                  Hasta
                </Typography>
              </Grid>

              <TextInput
                name="endDate"
                label="Fecha"
                style={{ padding: "1em" }}
                xs={12}
                md={6}
              />
              <TextInput
                name="endHour"
                label="Hora"
                style={{ padding: "1em" }}
                xs={12}
                md={6}
              />
            </Grid>

            <Grid container sx={{ padding: "1em" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  Tipo de Votación:
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Controller
                  name="type"
                  control={control}
                  defaultValue="billetera"
                  render={({ field }) => (
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      {...field}
                    >
                      <FormControlLabel
                        value="billetera"
                        control={<Radio />}
                        label="Por Billetera"
                      />
                      <FormControlLabel
                        value="token"
                        control={<Radio />}
                        label="Por Token"
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
            </Grid>

            <TableContext.Provider value={tableCandidates}>
              <FormTable />
            </TableContext.Provider>
            <TableContext.Provider value={tableVoters}>
              <FormTable />
            </TableContext.Provider>

            <Button
              variant="contained"
              type="submit"
              onClick={handleOpenDialog}
              sx={{ marginBottom: "1em" }}
            >
              Crear elección
            </Button>
            <Dialog open={openDialog} setDialog={setOpenDialog} />
          </form>
        </Grid>
      </FormContext.Provider>
    </Container>
  );
}

export { Election };
