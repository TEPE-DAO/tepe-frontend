import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Skeleton, Stack } from "@mui/material";
import ChildService from "../services/ChildService";
import { fromSome } from "../utils/common";
import { makeStdLib } from "../utils/reach";
import SaleService from "../services/SaleService";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const stdlib: any = makeStdLib();
const { algosdk } = stdlib;
const bn2n = stdlib.bigNumberToNumber;
const bn = stdlib.bigNumberify;
const pc = stdlib.parseCurrency;

interface SaleCardProps {
  time: any;
  appId: number;
  tokenAppId: number;
  sellerAddress: string;
  reserveAddress: string;
  tokenAmount: number;
  price: string;
}

export default function SaleCard({
  time,
  appId,
  tokenAppId,
  sellerAddress,
  reserveAddress,
  tokenAmount,
  price,
}: SaleCardProps) {
  const [balance, setBalance] = React.useState(0);
  const [allowance, setAllowance] = React.useState(0);
  console.log({
    time,
    appId,
    tokenAppId,
    sellerAddress,
    reserveAddress,
    tokenAmount,
    price,
  });
  const image =
    "https://algogems.io/image/eyJidWNrZXQiOiJhbGdvZ2VtcyIsImtleSI6ImltYWdlcy82NDUxMzc4NDkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NTAsImhlaWdodCI6NjAwLCJmaXQiOiJpbnNpZGUifX19";
  const handleBuy = async () => {
    await SaleService.Child.buy(
      "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
      appId,
      sellerAddress,
      reserveAddress,
      pc(price)
    );
  };
  React.useEffect(() => {
    (async () => {
      const res = bn2n(
        fromSome(
          await ChildService.balanceOf({ appId: tokenAppId }, sellerAddress),
          bn(0)
        )
      );
      setBalance(res);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const res = bn2n(
        fromSome(
          await ChildService.allowance(
            { appId: tokenAppId },
            sellerAddress,
            algosdk.getApplicationAddress(appId)
          ),
          bn(0)
        )
      );
      setAllowance(res);
    })();
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img
          loading="lazy"
          src={image}
          className="img-fluid"
          alt="Responsive image"
        ></img>
        {/*
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            1 remaining
          </Typography>
  */}
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>

        {
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {balance || allowance
              ? Math.min(balance, allowance) + " remaining"
              : <Skeleton variant="text" width="100%" />}
          </Typography>
          /*
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
</Typography>*/
        }
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
        <Button onClick={handleBuy} size="small">
          Buy
        </Button>
      </Stack>
    </Card>
  );
}
