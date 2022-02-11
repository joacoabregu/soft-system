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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";

function Election() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitted },
    register,
    resetField,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const {
    palette: { primary, text },
    back,
  } = useTheme();

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = () => {
    if (isSubmitted) {
      setOpenDialog(true);
    }
    return;
  };

  const [rowsCandidates, setRowsCandidates] = React.useState<number>(2);
  const [rowsVoters, setRowsVoters] = React.useState<number>(2);

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
      maxWidth="md"
      sx={{
        backgroundColor: back.main,
        borderRadius: 2,
        padding: { xs: "1em", md: "2em", lg: "3em" },
      }}
      disableGutters={true}
    >
      <Typography
        variant="h1"
        gutterBottom={true}
        align="left"
        sx={{ color: text.primary }}
      >
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
                  sx={{
                    color: primary.main,
                    marginBottom: "1.2em",
                    fontWeight: "600",
                  }}
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
                      InputProps={{
                        endAdornment: <AccessTimeIcon />,
                      }}
                      sx={{ backgroundColor: "#f3f3f37d", borderRadius: 4 }}
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ marginBottom: "1.5em" }}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    color: primary.main,
                    fontWeight: "600",
                  }}
                >
                  Tipo de Votación:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="type"
                  control={control}
                  defaultValue="token"
                  render={({ field }) => (
                    <ToggleButtonGroup exclusive {...field}>
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
              variant="outlined"
              type="submit"
              onClick={handleOpenDialog}
              size="large"
              sx={{ mt: "2em" }}
            >
              Crear elección
            </Button>
            <Dialog
              open={openDialog}
              setDialog={setOpenDialog}
              text="Elección realizada con éxito"
            />
          </form>
        </Grid>
      </FormContext.Provider>
    </Container>
  );
}

export { Election };
