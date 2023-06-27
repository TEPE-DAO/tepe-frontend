import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import AccountBalance from "../../components/AccountBalance";
import AccountAvailable from "../../components/AccountAvailable";
import AccountPayment from "../../components/AccountPayment";
import SubscriptionService from "../../services/SubscriptionService";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { zeroAddress } from "../../utils/algorand";
import ChildService from "../../services/ChildService";
import AssetService from "../../services/AssetService";
import moment from "moment";
import MasterService from "../../services/MasterService";
import Blink from "react-blink-text";
import ARC200Service from "../../services/ARC200Service";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import AccountBalances from "../../components/AccountBalances";
import SendDialog from "../../components/SendDialog";
import InfoIcon from "@mui/icons-material/Info";

const stdlib = makeStdLib();
const pc = stdlib.parseCurrency;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const admins = [
  "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
  "6YUFOMLDMS22SCAOLOJSU65MVMGNWUTI2TN5UTQQ5WZ47DVQKUW5CTXM7Y",
];

const exclude = [227793889, 227800537, 227802852];

const title = "ARC200";
const version = ""; // V1

const Connect = (props) => {
  const { activeAccount } = useWallet();
  return (
    <div className="Home">
      <Stack direction="column" gap={1}>
        {/*
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{title}</Typography>
          <small>{version}</small>
        </Stack>
        */}
        <Stack direction="column" gap={5} style={{ textAlign: "center" }}>
          {/*}
          <code style={{ display: "inline-block", textAlign: "left" }}>
            {props.name && `Name: ${props.name}`}
            <br />
            {props.symbol && `Symbol: ${props.symbol}`}
            <br />
            {props.decimals && `Decimals: ${props.decimals}`}
            <br />
            {props.totalSupply &&
              `Total Supply: ${Number(
                stdlib.formatWithDecimals(bn(props.totalSupply), 8)
              ).toLocaleString()}`}
            <br />
          </code>
              */}
          <Blink
            color="grey"
            blinkTime={3}
            text="Connect wallet to continue"
            fontSize="20"
          >
            Connect wallet to continue
          </Blink>
        </Stack>
      </Stack>
    </div>
  );
};

const User = (props) => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{title}</Typography>
          <small>{version}</small>
        </Stack>
        <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
          <code style={{ display: "inline-block" }}>
            {props.name && `Name: ${props.name}`}
            <br />
            {props.symbol && `Symbol: ${props.symbol}`}
            <br />
            {props.decimals && `Decimals: ${props.decimals}`}
            <br />
            {props.totalSupply &&
              `Total Supply: ${Number(
                stdlib.formatWithDecimals(bn(props.totalSupply), 8)
              ).toLocaleString()}`}
            <br />
          </code>
          {props.balance &&
            props.symbol &&
            `Balance: ${props.balance} ${props.symbol}`}
          <Stack direction="row" gap="1em" style={{ alignItems: "center" }}>
            <SendIcon />
            <Typography variant="h6">Send</Typography>
          </Stack>
          <Stack direction="row" gap="1em" style={{ alignItems: "center" }}>
            <AccountBalanceWalletIcon />
            <Typography variant="h6">Balance</Typography>
          </Stack>
          <Typography
            variant="h6"
            onClick={() => {
              navigate(
                "/address/QLLLYBITHLFUX3BWLPAXD23SBMLUYHGCG6NOPOBWY7KQHBLHLC3JC7LVBA"
              );
            }}
          >
            Address Page
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

function Balances(props) {
  const [tokens, setTokens] = React.useState(props.tokens);
  const [appId, setAppId] = React.useState(0);
  const [manage, setManage] = React.useState(false);
  const [sendDialogOpen, setSendDialogOpen] = React.useState(false);
  React.useEffect(() => {}, tokens);
  return (
    <>
      <SendDialog open={sendDialogOpen} setOpen={setSendDialogOpen} appId={appId} />
      <div>
        <Typography variant="h6">Balances</Typography>
        <button
          onClick={() => {
            try {
              const token = parseInt(window.prompt("Enter appId"));
              if (!token) return;
              // TODO verify token
              const newTokens = Array.from(new Set([...tokens, token]));
              setTokens(newTokens);
              localStorage.setItem("tokens", JSON.stringify(newTokens));
            } catch (e) {
              console.log(e);
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setManage(!manage);
          }}
        >
          Manage
        </button>
        <AccountBalances
          manage={manage}
          tokens={tokens}
          onSetSendDialogOpen={setSendDialogOpen}
          onSetAppId={setAppId}
        />
      </div>
    </>
  );
}

function Home() {
  const { activeAccount } = useWallet();
  const tokens = JSON.parse(localStorage.getItem("tokens") || "[249906631]");
  return activeAccount ? <Balances tokens={tokens} /> : <Connect />;
}

export default Home;
