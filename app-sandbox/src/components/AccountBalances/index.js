import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import TokenBox from "../TokenBox";
import ChildService from "../../services/ChildService.ts";
import MasterService from "../../services/MasterService.ts";
import AssetService from "../../services/AssetService.ts";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
function AccountBalances() {
  const { activeAccount } = useWallet();
  const [tokens, setTokens] = useState(
    JSON.parse(localStorage.getItem(`tokens`) ?? "{}")
  );
  const handleDeposit = useCallback(
    async (token) => {
      if (!activeAccount) return;
      const amount = "10";
      const addr = activeAccount.address;
      await ChildService.deposit(token, addr, addr, amount);
      await reloadTokens();
    },
    [activeAccount]
  );
  const handleWithdraw = useCallback(
    async (token) => {
      if (!activeAccount) return;
      const amount = stdlib.formatWithDecimals(
        fromSome(
          await ChildService.balanceOf(token, activeAccount.address),
          bn(0)
        ),
        token.decimals
      );
      const addr = activeAccount.address;
      await ChildService.withdraw(token, addr, addr, amount);
      await reloadTokens();
    },
    [activeAccount]
  );
  const reloadTokens = useCallback(async () => {
    if (!activeAccount) return;

    // -------------------------------------------
    // use stored ready events and seek if needed
    // -------------------------------------------
    const storedEvents = JSON.parse(
      localStorage.getItem("event-ready") ?? "{}"
    );
    const events = !storedEvents.time
      ? await MasterService.getReadyEvents(activeAccount.address)
      : await MasterService.getReadyEvents(
          activeAccount.address,
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
    // -------------------------------------------
    // get tokens from events
    // and balances for active account
    // -------------------------------------------
    const tokens = [];
    let time = bn(0);
    for (const event of newEvents) {
      const {
        what: [[ctcInfoBn, assetInfoBn]],
        when,
      } = event;
      const appId = bn2n(ctcInfoBn);
      const assetId = bn2n(assetInfoBn);
      const asset = await AssetService.getAsset(assetId);
      const {
        params: { decimals, name, ["unit-name"]: symbol },
      } = asset;
      const amountBn = fromSome(
        await ChildService.balanceOf({ appId }, activeAccount.address),
        bn(0)
      );
      const amount = stdlib.formatWithDecimals(amountBn, decimals);
      time = bn2n(when);
      tokens.push({ appId, assetId, decimals, name, symbol, amount });
    }
    localStorage.setItem(`tokens`, JSON.stringify({ time, tokens }));
    setTokens({ time, tokens });
  }, [activeAccount]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    reloadTokens();
  }, [activeAccount]);
  // -------------------------------------------
  return (
    <div className="AccountBalances">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token Asset ID</TableCell>
            <TableCell>Token Contract ID</TableCell>
            <TableCell>Token Name</TableCell>
            {<TableCell>Token Symbol</TableCell>}
            {/*<TableCell>Token Decimals</TableCell>*/}
            <TableCell>Balance</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens?.tokens?.map((token) => (
            <TableRow key={token.appId}>
              <TableCell>{token.assetId}</TableCell>
              <TableCell>{token.appId}</TableCell>
              <TableCell>{token.name}</TableCell>
              {<TableCell>{token.symbol}</TableCell>}
              {/*<TableCell>{token.decimals}</TableCell>*/}
              <TableCell>
                {token.amount}&nbsp;{token.symbol}
              </TableCell>
              <TableCell>
                <ButtonGroup>
                  {[
                    {
                      label: "D",
                      desciption: "Deposit",
                      icon: <AddIcon />,
                      onClick: async () => {
                        handleDeposit(token);
                      },
                    },
                    {
                      label: "W",
                      desciption: "Withdraw",
                      icon: <RemoveIcon />,
                      onClick: async () => {
                        handleWithdraw(token);
                      },
                    },
                    {
                      label: "S",
                      desciption: "Send",
                      icon: <SendIcon />,
                    },
                  ].map((el) => (
                    <Tooltip
                      key={el.label}
                      placement="top"
                      title={el.desciption}
                    >
                      <Button onClick={el.onClick}>
                        {el.icon || el.label}
                      </Button>
                    </Tooltip>
                  ))}
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AccountBalances;
