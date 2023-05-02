import { Stack, Typography } from "@mui/material";
import * as React from "react";
import Textra from "react-textra";

function Home() {
  return (
    <div className="Home">
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">Drop</Typography>
          <small>Beta</small>
        </Stack>
        <Stack direction="row" gap="1em">
          <Textra effect="topDown" data={["Anything", "Anywhere", "Anyone"]} />
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
