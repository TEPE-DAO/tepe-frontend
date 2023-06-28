import { useState, useMemo, useEffect, useCallback } from "react";
import { Stack, Button } from "@mui/material";
import TextInputBase from "../TextInputBase/index.tsx";
import { useWallet } from "@txnlab/use-wallet";
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const paramsTemplate = {
  zeroAddress: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ", // 58 chars
  managerAddress: "", // 58 chars
  enableZeroAddressBurn: true, // true|false
  meta: {
    name: "", // 0-32 chars
    symbol: "", // 0-8 chars
    decimals: -1, // 0-19
    totalSupply: -1, // log10(UInt.max)
  },
};

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const fc = stdlib.formatCurrency;
const bn2n = stdlib.bigNumberToNumber;
const fawd = stdlib.formatWithDecimals;

function MintForm({
  token,
  tokens,
  setToken,
  setTokenAmount,
  setAccountAddress,
}) {
  const navigate = useNavigate();
  const { activeAccount, providers } = useWallet();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState(-1);
  const [totalSupply, setTotalSupply] = useState(-1);
  const [managerAddress, setManagerAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const [ctcInfo, setCtcInfo] = useState();
  const [progress, setProgress] = useState(false);
  console.log({ name, symbol, decimals, totalSupply, managerAddress });
  const isValid = useMemo(() => {
    return true; // TODO implement me
  }, [name, symbol, decimals, totalSupply, managerAddress]);
  const handleMint = useCallback(() => {
    if (!activeAccount) {
      providers
        .filter((el) => el.metadata.id === activeAccount.providerId)[0]
        .connect();
    }
    setDoSubmit(true);
  }, [
    activeAccount,
    providers,
    name,
    symbol,
    decimals,
    totalSupply,
    managerAddress,
    isValid,
  ]);
  useEffect(() => {
    if (!doSubmit) return;
    (async () => {
      setProgress(true);
      try {
        console.log(
          `${name} ${symbol} ${decimals} ${totalSupply} ${managerAddress}`
        );
        const params = {
          ...paramsTemplate,
          managerAddress,
          ...{
            meta: {
              name,
              symbol,
              decimals,
              totalSupply,
            },
          },
        };
        const ctcInfo = await ARC200Service.launch(
          activeAccount.address,
          params
        );
        //setCtcInfo(ctcInfo);
        const tokens = JSON.parse(
          localStorage.getItem("tokens") ?? "[249906631]"
        );
        localStorage.setItem(
          "tokens",
          JSON.stringify([...tokens, bn2n(ctcInfo)])
        );
        toast(
          <div>
            Mint successful!
            <br />
            {fawd(bn(totalSupply), Number(decimals))} {symbol} sent to{" "}
            {managerAddress.slice(0, 4)}
            ...{managerAddress.slice(-4)}
          </div>
        );
        navigate("/");
      } catch (e) {
        console.log(e);
      } finally {
        setDoSubmit(false);
        setProgress(false);
      }
    })();
  }, [doSubmit]);
  return (
    <div className="MintForm">
      {ctcInfo ? (
        <div>{bn2n(ctcInfo)}</div>
      ) : progress ? (
        <Stack
          gap={5}
          direction="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
          <Typography variant="h6">Transaction pending...</Typography>
        </Stack>
      ) : (
        <Stack spacing={2}>
          {[
            /*
          {
            name: "zeroAddress",
            label: "Zero Address",
          },
          {
            name: "enableZeroAddressBurn",
            label: "Enable Zero Address Burn",
          },
          */
            {
              name: "meta.name",
              label: "Name",
              type: "text",
              onChange: (e) => setName(e.target.value),
            },
            {
              name: "meta.symbol",
              label: "Symbol",
              type: "text",
              onChange: (e) => setSymbol(e.target.value),
            },
            {
              name: "meta.decimals",
              label: "Decimals",
              type: "number",
              onChange: (e) => setDecimals(e.target.value),
            },
            {
              name: "meta.totalSupply",
              label: "Total Supply",
              type: "number",
              onChange: (e) => setTotalSupply(e.target.value),
            },
            {
              name: "managerAddress",
              label: "Manager Address",
              type: "text",
              onChange: (e) => setManagerAddress(e.target.value),
            },
          ].map(({ name, label, type, onChange }) => (
            <TextInputBase type={type} onChange={onChange} label={label} />
          ))}
          <Button variant="contained" onClick={handleMint}>
            Mint
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default MintForm;
