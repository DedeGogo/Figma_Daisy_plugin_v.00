import * as React from "react";
import { Container, Grid, Button } from "@mui/material";

const footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#F6F7F8",
        bottom: 0,
        height: "56px",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid item>
          <Button>BACK</Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              backgroundColor: "#4793A3",
              color: "#FFFFFF",
            }}
          >
            UPDATE LIBRARY
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default footer;
