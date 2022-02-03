import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormTable from "../components/FormTable";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Dialog from "../components/Dialog";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FormInput, TableContextValue } from "../types/interfaces";
import TextInput from "../components/TextInput";
import { FormContext } from "../context/FormContext";
import { TableContext } from "../context/TableContext";
import Divider from "@mui/material/Divider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";

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
  console.log("render");

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
            <TextInput name="title" label="Titulo" />

            <TextInput name="description" label="Descripción" />

            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textAlign="left"
                  sx={{ marginBottom: "1.2em" }}
                >
                  Horario de Votación
                </Typography>
              </Grid>

              <LocalizationProvider dateAdapter={DateAdapter}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    paddingRight: { xs: "0", md: "1em" },
                  }}
                >
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        label="Fecha"
                        {...field}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    )}
                  ></Controller>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    padding: { xs: "0", md: "0 0.5em 0 0.5em" },
                  }}
                >
                  <Controller
                    name="hour"
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        label="Hora"
                        {...field}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    )}
                  ></Controller>
                </Grid>
              </LocalizationProvider>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  paddingLeft: { xs: "0", md: "1em" },
                }}
              >
                <Controller
                  name="endHour"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Duración"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      type="time"
                      fullWidth
                      sx={{ backgroundColor: "#f3f3f37d", borderRadius: 4 }}
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginBottom: "1.5em" }}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left">
                  Tipo de Votación:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="type"
                  control={control}
                  defaultValue="token"
                  render={({ field }) => (
                    <ToggleButtonGroup color="primary" exclusive {...field}>
                      <ToggleButton value="token" size="large">
                        Token
                      </ToggleButton>
                      <ToggleButton value="billetera" size="large">
                        Billetera
                      </ToggleButton>
                    </ToggleButtonGroup>
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
