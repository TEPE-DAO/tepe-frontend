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
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;
const fawd = stdlib.formatWithDecimals;

function AccountBalances(props) {
  const { activeAccount } = useWallet();
  const [tokens, setTokens] = useState([]);
  const reloadTokens = useCallback(async () => {
    if (!activeAccount) return;
    const tokens = [];
    for (const appId of props.tokens) {
      const meta = await ARC200Service.getTokenMetadata(appId);
      const amount = fawd(
        await ARC200Service.balanceOf(appId, activeAccount.address),
        meta.decimals
      );
      tokens.push({
        appId,
        amount,
        ...meta,
      });
    }
    setTokens(tokens);
  }, [activeAccount, props.tokens]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    reloadTokens();
  }, [activeAccount, props.tokens]);
  // -------------------------------------------
  return (
    <div className="AccountBalances">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>App Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens?.map((token) => (
            <TableRow key={token.appId}>
              <TableCell>{token.appId}</TableCell>
              <TableCell>{token.name}</TableCell>
              <TableCell>
                {Number(Math.floor(token?.amount ?? 0)).toLocaleString()}
                {
                  token.decimals > 0 ? "." + String(
                    Number(token?.amount ?? 0).toFixed(token.decimals)
                  ).split(".")[1] : ""
                }
                &nbsp;
                {token.symbol}
              </TableCell>
              <TableCell>
                <ButtonGroup variant="text">
                  {/* TODO convert to dropdown with default send */}
                  {(props.manage
                    ? [
                        {
                          label: "R",
                          desciption: "Remove",
                          icon: <DeleteIcon color="warning" />,
                          onClick: () => {
                            const newTokens = tokens.filter(
                              (el) => el.appId != token.appId
                            );
                            console.log({ newTokens });
                            localStorage.setItem(
                              "tokens",
                              JSON.stringify(newTokens.map((el) => el.appId))
                            );
                            setTokens(newTokens);
                          },
                        },
                      ]
                    : [
                        {
                          label: "S",
                          desciption: "Send",
                          icon: <SendIcon />,
                          onClick: () => {
                            props.onSetSendDialogOpen(true);
                          },
                        },
                      ]
                  ).map((el) => (
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
