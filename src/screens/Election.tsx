import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormTable from "../components/FormTable";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { FormInput } from "../types/interfaces";
import TextInput from "../components/TextInput";
import { FormContext } from "../context/FormContext";

function Election() {
  const { control, handleSubmit, register, resetField } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const [rows, setRows] = React.useState<number>(1);

  const columns = ["Nombre", "Descripción", "Imagen"];

  const formContextValue = {
    control,
    register,
    resetField,
    rows,
    columns,
  };

  return (
    <Container maxWidth="sm">
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
              label="Descripcion"
              style={{ padding: "1em 0 1em 0" }}
            />
            <Paper variant={"outlined"} sx={{ padding: "1em" }}>
              <Grid container sx={{ padding: "1em" }}>
                <Grid item xs={12} sx={{ padding: "0.2em" }}>
                  <Typography variant="body1" gutterBottom>
                    Horario de Votación
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
                  name="duration"
                  label="Hora"
                  style={{ padding: "1em" }}
                  xs={12}
                  md={6}
                />
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1">Duracion:</Typography>
                  </Grid>
                  <TextInput
                    name="endDuration"
                    label="Hora"
                    style={{ padding: "1em" }}
                    xs={12}
                    md={6}
                  />
                </Grid>
              </Grid>
            </Paper>

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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1em",
              }}
            >
              <Typography>Candidatos</Typography>
              <Button variant="contained" onClick={() => setRows(rows + 1)}>
                <AddIcon />
              </Button>
            </Grid>
            <FormTable />

            <Button variant="contained" type="submit" value="Crear elección">
              Crear elección
            </Button>
          </form>
        </Grid>
      </FormContext.Provider>
    </Container>
  );
}

export { Election };
