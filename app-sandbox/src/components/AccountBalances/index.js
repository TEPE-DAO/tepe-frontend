import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { displayToken } from "../../utils/algorand.js";

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
              <TableCell>{displayToken(token)}</TableCell>
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
