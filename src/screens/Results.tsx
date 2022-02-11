import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { votingDate, votingResults } from "../assets/mockData";

export default function Results() {
  const {
    back,
    palette: { primary, text },
  } = useTheme();
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

      <Grid container spacing={6}>
        {Object.entries(votingResults.results).map(([key, candidate]) => {
          return (
            <Grid item xs={12} sm={6} key={key}>
              <Card
                sx={{
                  padding: "0.5em",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                raised
              >
                <CardContent>
                  {candidate.id === votingResults.winnerId ? (
                    <Alert
                      iconMapping={{
                        success: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
                      }}
                      sx={{
                        fontSize: "1.5rem",
                        mb: "0.5em",
                        justifyContent: "center",
                      }}
                    >
                      Ganador
                    </Alert>
                  ) : null}
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
                  <Box
                    component="span"
                    sx={{
                      p: 2,
                      border: "1px solid #585757",
                      borderRadius: "0.5em",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: primary.main }}>
                      Votos: {candidate.votes}
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
