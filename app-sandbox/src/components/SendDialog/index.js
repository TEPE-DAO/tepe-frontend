import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SendForm from "../SendForm";
import ChildService from "../../services/ChildService.ts";
import ARC200Service from "../../services/ARC200Service.ts";
function SendDialog(props) {
  const { providers, activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const handleSubmit = async () => {
    console.log({ activeAccount });
    if (!activeAccount) {
      providers
        .filter((el) => el.metadata.id === activeAccount.providerId)[0]
        .connect();
    }
    setDoSubmit(true);
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (!doSubmit) return;
    console.log({ token, tokenAmount, accountAddress });
    (async () => {
      const res = await ARC200Service.transfer(
        token,
        activeAccount.address,
        accountAddress,
        tokenAmount
      );
      if (res) {
        alert(
          `Successfully transferred ${tokenAmount} ${token.symbol} to ${accountAddress}`
        );
      } else {
        alert("Transfer failed");
      }
      // TODO catch others
      setDoSubmit(false);
    })();
  }, [activeAccount, doSubmit]);
  return (
    <div className="SendDialog">
      <Dialog fullScreen={true} open={props.open} onClose={props.onClose}>
        {/*<DialogTitle>Send</DialogTitle>*/}
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SendForm
            setToken={setToken}
            setTokenAmount={setTokenAmount}
            setAccountAddress={setAccountAddress}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Close</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SendDialog;
