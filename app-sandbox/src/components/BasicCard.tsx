import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Stack } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface BasicCardProps {
  image: string;
  price: string;
  onClick: () => void;
}

export default function BasicCard({ image, price, onClick }: BasicCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img
          loading="lazy"
          src={image}
          className="img-fluid"
          alt="Responsive image"
        ></img>
        {/*<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
  </Typography>*/}
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>

        {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
</Typography>*/}
      </CardContent>
      <Stack
        direction="row"
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1em" }}>{price}</span>&nbsp;
          <img style={{ height: "2em", fill: "black" }} src="/logo.svg" />
        </Box>
        <Button onClick={onClick} size="small">
          Buy
        </Button>
      </Stack>
    </Card>
  );
}
