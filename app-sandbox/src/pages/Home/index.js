import { Stack, Typography } from "@mui/material";
import * as React from "react";

function Home() {
  return (
    <div className="Home">
      <Stack direction="row" style={{ alignItems: "baseline" }}>
        <Typography variant="h1">NFT Drop</Typography>
        <small>Beta</small>
      </Stack>
    </div>
  );
}

export default Home;
