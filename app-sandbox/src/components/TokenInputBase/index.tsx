import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MasterService from "../../services/MasterService";
import { useWallet } from "@txnlab/use-wallet";
import { zeroAddress } from "../../utils/algorand";
import { makeStdLib } from "../../utils/reach";
import AssetService from "../../services/AssetService";
import ARC200Service from "../../services/ARC200Service";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

interface CustomizedInputBaseProps {
  onTokenChange: any;
  onTokenAmountChange: any;
}

export default function CustomizedInputBase({
  onTokenChange,
  onTokenAmountChange,
}: CustomizedInputBaseProps) {
  // -------------------------------------------
  // TODO use events from context or hoc
  const { activeAccount } = useWallet();
  const [events, setEvents] = useState<any>( // TODO type me
    JSON.parse(localStorage.getItem("event-ready") ?? "{}")?.events ?? []
  );
  const tokenARC200 = [
    30819192,
    ARC200Service.getCTCInfo(),
    "6X7XJO6FX3SHUK2OUL46QBQDSNO67RAFK6O73KJD4IVOMTSOIYANOIVWNU",
    {
      name: "ARC200 Token",
      symbol: "ARC200",
      decimals: "8",
      totalSupply: "1000000000000000000",
    },
  ];
  const [options, setOptions] = useState<any>([tokenARC200]); // TODO type me
  const [option, setOption] = useState<any>("");
  useEffect(() => {
    (async () => {
      // -------------------------------------------
      // use stored ready events and seek if needed
      // -------------------------------------------
      const storedEvents = JSON.parse(
        localStorage.getItem("event-mint") ?? "{}"
      );
      const events = !storedEvents.time
        ? await ARC200Service.getMintEvents(
            activeAccount?.address ?? zeroAddress
          )
        : await ARC200Service.getMintEvents(
            activeAccount?.address ?? zeroAddress,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        "event-mint",
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      setEvents(newEvents);
      // -------------------------------------------
    })();
  }, [activeAccount]);
  //
  // EFFECT: get options from events if exists and not already set
  //
  useEffect(() => {
    if (!events) return;
    (async () => {
      const options: any = [];
      for (const e of events) {
        const { what, when } = e;
        const [tokenIdHexAddr] = what;
        const tokenId = stdlib.formatAddress(tokenIdHexAddr);
        const metadata = await ARC200Service.getTokenMetadata(
          zeroAddress,
          tokenId
        );
        const time = bn2n(when);
        const option = [time, undefined, tokenId, metadata];
        options.push(option);
      }
      setOptions(options);
    })();
  }, [events]);
  //
  // EFFECT: set option to first option if not already set
  //
  useEffect(() => {
    if (option) return;
    const v1TokenOption = {
      tokenId: "6X7XJO6FX3SHUK2OUL46QBQDSNO67RAFK6O73KJD4IVOMTSOIYANOIVWNU",
      name: "ARC200 Token",
      symbol: "ARC200",
      decimals: "8",
      totalSupply: "1000000000000000000",
    };
    setOption(v1TokenOption);
    onTokenChange(null, v1TokenOption);
  }, [onTokenChange, options]);
  return (
    <>
      <InputLabel>Send</InputLabel>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} onChange={onTokenAmountChange} />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <FormControl style={{ minWidth: 100, border: 0 }} sx={{ m: 1 }}>
          <Select
            input={<BootstrapInput />}
            sx={{ border: 0 }}
            id="token-select"
            onChange={onTokenChange}
            value={options ? options[0] : ""}
          >
            {options?.map((option: any) => (
              <MenuItem key={option[2]} value={option}>
                {option[3].symbol}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    </>
  );
}
