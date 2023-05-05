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
function SendDialog(props) {
  const { providers, activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const handleSubmit = async () => {
    if (!activeAccount) {
      providers[0].connect();
    }
    setDoSubmit(true);
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (!doSubmit) return;
    ChildService.deposit(
      token,
      activeAccount.address,
      accountAddress,
      tokenAmount
    );
    setDoSubmit(false);
  }, [activeAccount, doSubmit]);
  return (
    <div className="SendDialog">
      <Dialog fullScreen={true} open={props.open} onClose={props.onClose}>
        <DialogTitle>Send</DialogTitle>
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
