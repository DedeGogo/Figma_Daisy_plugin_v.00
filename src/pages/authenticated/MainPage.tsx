import * as React from "react";
import DaisyAppBar from "../../components/DaisyAppBar";
import DaisyFooter from "../../components/DaisyFooter";
import { Container, Box, Grid, Button } from "@mui/material";
import { userContext } from "../../providers/UserProvider";

export default function MainPage() {
  const { setUser } = React.useContext(userContext);
  function logOut() {
    setUser(null);
  }

  return (
    <Container>
      <Grid container>
        <Grid item>
          <DaisyAppBar />
        </Grid>
        <Grid>
          <Box>
            Here comes the main content
            <Button onClick={logOut}>logout</Button>
          </Box>
        </Grid>
        <Grid item>
          <DaisyFooter />
        </Grid>
      </Grid>
    </Container>
  );
}
