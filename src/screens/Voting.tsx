import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Candidates from "../components/Candidates";
import { debounce } from "../utils/utilFunctions";


const votingDate = {
  starteDate: "15/01/2022 08:00",
  endDate: "15/01/2022 18:00",
};

export default function Voting() {
  const {back } = useTheme() 
  const [token, setToken] = React.useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setToken(e.currentTarget.value);
  }
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
      <Typography variant="h2" gutterBottom={true}>
        Detalle de la votación interna
      </Typography>
      <Typography variant="h3" gutterBottom={true}>
        Horario de votación:
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        {votingDate.starteDate} - {votingDate.endDate}
      </Typography>
      <Typography variant="h3" gutterBottom={true}>
        Token / address
      </Typography>
      <TextField
        id="token"
        label="token"
        variant="outlined"
        value={token}
        onChange={handleChange}
      />
      <Candidates />
    </Container>
  );
}
