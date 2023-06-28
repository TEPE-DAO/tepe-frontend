import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
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
  token: any;
}

export default function CustomizedInputBase({
  onTokenChange,
  onTokenAmountChange,
  token,
}: CustomizedInputBaseProps) {
  // -------------------------------------------
  // TODO use events from context or hoc
  const tokens = JSON.parse(localStorage.getItem("tokens") || "[249906631]");
  const [options, setOptions] = useState<any>(null); // TODO type me
  // EFFECT: get token options
  useEffect(() => {
    if (options) return;
    (async () => {
      const options: any = [];
      for (const ctcInfo of tokens) {
        const metadata = await ARC200Service.getTokenMetadata(ctcInfo);
        const option = { appId: ctcInfo, ...metadata };
        options.push(option);
      }
      setOptions(options);
    })();
  }, []);
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
            value={
              options
                ? options.filter((el: any) => el.appId === token.appId)[0]
                : null
            }
          >
            {options?.map((option: any) => (
              <MenuItem key={option.appId} value={option}>
                {option.symbol}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    </>
  );
}
