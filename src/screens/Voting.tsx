import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import Dialog from "../components/Dialog";
import { VotingForm } from "../types/interfaces";
import { tokens, votingDate, candidates } from "../assets/mockData";

export default function Voting() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitted },
    watch,
    setValue,
  } = useForm<VotingForm>();
  const token = watch("token");
  const onSubmit: SubmitHandler<VotingForm> = (data) => {
    console.log(data);
  };
  const {
    back,
    palette: { primary, text },
  } = useTheme();
  const [tokenAble, setTokenAble] = React.useState<boolean>(true);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = (): void => {
    if (isSubmitted) {
      setOpenDialog(true);
    }
    return;
  };

  React.useEffect(() => {
    if (
      Object.entries(tokens).find(([key, element]) => {
        return token === element;
      })
    ) {
      setTokenAble(false);
    } else {
      setTokenAble(true);
    }
  }, [token]);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: back.main,
        borderRadius: 2,
        padding: { xs: "1.5em", md: "2em", lg: "3em" },
      }}
      disableGutters={true}
    >
      <Typography variant="h1" gutterBottom={true} sx={{ color: text.primary }}>
        Votación Interna
      </Typography>
      <Typography variant="h2" sx={{ mb: "1em", color: primary.main }}>
        Detalle de la votación interna
      </Typography>
      <Typography variant="h3" gutterBottom={true} sx={{ color: primary.main }}>
        Horario de votación:
      </Typography>
      <Typography variant="body1" sx={{ mb: "2em", color: primary.main }}>
        {votingDate.starteDate} - {votingDate.endDate}
      </Typography>

      <Typography variant="h3" gutterBottom={true} sx={{ color: primary.main }}>
        Token / address
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="token"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              id="token"
              label="token"
              variant="outlined"
              sx={{ maxWidth: "50%", mb: "2em" }}
              {...field}
            />
          )}
        />
        {!tokenAble && (
          <Alert
            severity="warning"
            sx={{ maxWidth: "50%", margin: " 0 auto", mb: "2em" }}
          >
            Ya se votó con este token
          </Alert>
        )}
        <Grid container spacing={6}>
          {Object.entries(candidates).map(([key, candidate]) => {
            return (
              <Grid item xs={12} sm={6} key={key}>
                <Card sx={{ padding: "0.5em" }} raised>
                  <CardContent>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        color: primary.main,
                        fontSize: "1.3rem",
                        fontWeight: 600,
                      }}
                    >
                      {candidate.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: "1em" }}>
                      {candidate.description}
                    </Typography>
                    <img
                      src={candidate.image}
                      alt="profile"
                      style={{ margin: "0 auto", borderRadius: "50%" }}
                    />
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant="outlined"
                      size="large"
                      type="submit"
                      onClick={() => {
                        setValue("candidate", candidate.id);
                        handleOpenDialog();
                      }}
                      disabled={!tokenAble}
                    >
                      Votar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </form>
      <Dialog
        open={openDialog}
        setDialog={setOpenDialog}
        text="Voto realizado con éxito"
      />
    </Container>
  );
}
