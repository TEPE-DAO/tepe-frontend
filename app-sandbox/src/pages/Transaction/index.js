import { Stack, Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { useParams } from "react-router-dom";
import { zeroAddress } from "../../utils/algorand";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;

const User = (props) => {
  return (
    <div className="Home">
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{props.symbol}</Typography>
        </Stack>
        <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
          <code style={{ display: "inline-block" }}>
            {props.name && `Name: ${props.name}`}
            <br />
            {props.symbol && `Symbol: ${props.symbol}`}
            <br />
            {props.decimals && `Decimals: ${props.decimals}`}
            <br />
            {props.totalSupply && `Total Supply: ${props.totalSupply}`}
            <br />
          </code>
          {props.holder && (
            <span style={{ overflow: "hidden" }}>Holder: {props.holder}</span>
          )}
          {props.balance &&
            props.symbol &&
            `Balance: ${props.balance} ${props.symbol}`}
        </Stack>
      </Stack>
    </div>
  );
};

function Address() {
  const { id: appId } = useParams();
  const { activeAccount } = useWallet();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const tokenMetadata = await ARC200Service.getTokenMetadata(appId);
      const token = { ...tokenMetadata };
      setToken(token);
    })();
  }, [activeAccount]);
  React.useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const ret = (await ARC200Service.getTransferEvents(appId))
        .map(({ when, what }) => [
          bn2n(when),
          fa(what[0]),
          fa(what[1]),
          bn2bi(what[2]).toString(),
        ])
        .filter(
          (el) =>
            el[1] === activeAccount.address || el[2] === activeAccount.address
        )
        .reverse();
      console.log(ret);
      setTransactions(ret);
    })();
  }, [activeAccount]);
  return (
    <>
      {/*<User {...token} />*/}
      <h1>Transactions</h1>
      <h2>For: {activeAccount?.address}</h2>
      <ul>
        <li>block:from:to:amount</li>
        {transactions.map((el) => (
          <li>{el.join(":")}</li>
        ))}
      </ul>
    </>
  );
}

export default Address;