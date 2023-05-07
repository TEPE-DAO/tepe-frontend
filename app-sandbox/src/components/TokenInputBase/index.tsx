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
  const [options, setOptions] = useState<any>(null); // TODO type me
  useEffect(() => {
    (async () => {
      // -------------------------------------------
      // use stored ready events and seek if needed
      // -------------------------------------------
      const storedEvents = JSON.parse(
        localStorage.getItem("event-ready") ?? "{}"
      );
      const events = !storedEvents.time
        ? await MasterService.getReadyEvents(
            activeAccount?.address ?? zeroAddress
          )
        : await MasterService.getReadyEvents(
            activeAccount?.address ?? zeroAddress,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        "event-ready",
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      setEvents(newEvents);
      // -------------------------------------------
    })();
  }, [activeAccount]);
  useEffect(() => {
    if (!events) return;
    (async () => {
      const options: any = [];
      for (const e of events) {
        const { what, when } = e;
        const [[appIdBn, assetIdBn]] = what;
        const appId = bn2n(appIdBn);
        const assetId = bn2n(assetIdBn);
        const time = bn2n(when);
        const asset = await AssetService.getAsset(assetId);
        const option = [time, appId, assetId, asset.params];
        options.push(option);
      }
      setOptions(options);
    })();
  }, [events]);
  console.log({ events, options });
  // -------------------------------------------

  /*
  const [token, setToken] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setToken(event.target.value);
    setTokenAmount("");
  };
  */
  return (
    <>
      <InputLabel>Send</InputLabel>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          //value={tokenAmount}
          //onChange={(e) => setTokenAmount(e.target.value)}
          onChange={onTokenAmountChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <FormControl style={{ minWidth: 100, border: 0 }} sx={{ m: 1 }}>
          <Select
            input={<BootstrapInput />}
            sx={{ border: 0 }}
            id="token-select"
            //value={token}
            //onChange={handleChange}
            onChange={onTokenChange}
          >
            {options?.map((option: any) => (
              <MenuItem value={option}>{option[3]["unit-name"]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    </>
  );
}
