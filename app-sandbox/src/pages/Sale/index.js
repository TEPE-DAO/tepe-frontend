import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SaleService from "../../services/SaleService";
import { zeroAddress } from "../../utils/algorand";
import BasicCard from "../../components/BasicCard";
import SaleCard from "../../components/SaleCard";

/*
ctcInfoMaster: 215234234
ctcInfoChild: 215234317
*/

const ctcInfoChild = 215234317;

function Sale() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const decode = SaleService.Master.decodeEvent("announce");
    SaleService.Master.getEvents("announce")(zeroAddress)
      .then((el) => el.map(decode))
      .then(setSales);
  }, []);

  console.log({ sales });

  return (
    <div className="Home">
      <Stack sx={{ m: 5 }}>
        {/*
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">TEPE</Typography>
          <small>Sale</small>
        </Stack>
        <button
          onClick={() => {
            SaleService.Child.buy(
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
              ctcInfoChild,
              "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
              zeroAddress,
              2000000
            );
          }}
        >
          Buy
        </button>
        <button
          onClick={() => {
            SaleService.Child.deleteSale(
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
              ctcInfoChild,
              "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
              zeroAddress
            );
          }}
        >
          Delete Sale
        </button>
        <button
          onClick={() => {
            SaleService.Child.deletePurchase(
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
              ctcInfoChild,
              "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
              zeroAddress,
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4"
            );
          }}
        >
          Delete Purchase
        </button>
        <button
          onClick={() => {
            SaleService.Child.close(
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
              ctcInfoChild
            );
          }}
        >
          Close Child
        </button>
        <button
          onClick={() => {
            SaleService.Master.close(
              "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
              214218841
            );
          }}
        >
          Close Master
        </button>
        </Stack>*/}
        <Grid container spacing={2}>
          {sales.map((sale) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={Math.random()}>
              <SaleCard {...sale} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default Sale;
