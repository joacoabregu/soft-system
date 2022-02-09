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


import { VotingForm, ICandidates } from "../types/interfaces";

const votingDate = {
  starteDate: "15/01/2022 08:00",
  endDate: "15/01/2022 18:00",
};


const candidates: ICandidates = {
  candidate1: {
    id: "1",
    name: "Candidato1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate2: {
    id: "2",
    name: "Candidato2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate3: {
    id: "3",
    name: "Candidato3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate4: {
    id: "4",
    name: "Candidato4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
};

const tokens = {
  token1: "1",
  token2: "2",
};

export default function Voting() {
  const { control, handleSubmit, formState, watch, setValue } =
    useForm<VotingForm>();
  const onSubmit: SubmitHandler<VotingForm> = (data) => {
    console.log(data);
  };
  const { back } = useTheme();
  const [tokenAble, setTokenAble] = React.useState<boolean>(true);
  const token = watch("token");

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
        backgroundColor: back.white,
        borderRadius: 2,
        padding: { xs: "1em", md: "2em", lg: "3em" },
      }}
      disableGutters={true}
    >
      <Typography variant="h1" gutterBottom={true}>
        Votación Interna
      </Typography>
      <Typography variant="h2" sx={{ mb: "1em" }}>
        Detalle de la votación interna
      </Typography>
      <Typography variant="h3" gutterBottom={true}>
        Horario de votación:
      </Typography>
      <Typography variant="body1" sx={{ mb: "2em" }}>
        {votingDate.starteDate} - {votingDate.endDate}
      </Typography>

      <Typography variant="h3" gutterBottom={true}>
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
              sx={{ maxWidth: "50%", mb: "3em" }}
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
                <Card sx={{ padding: "0.5em" }}>
                  <CardContent>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontSize: "1.3rem", fontWeight: 600 }}
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
                      type="submit"
                      onClick={() => setValue("candidate", candidate.id)}
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
    </Container>
  );
}
