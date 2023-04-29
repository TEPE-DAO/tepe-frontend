import { useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { Button, Stack, TextField } from "@mui/material";
import TokenBox from "../../components/TokenBox";
import ChildService from "../../services/ChildService.ts";
function SendForm() {
  const { activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  console.log({ token });
  const handleSubmit = async () =>
    await ChildService.deposit(
      token,
      activeAccount.address,
      accountAddress,
      tokenAmount
    );
  return (
    <div className="SendForm">
      <Stack spacing={5}>
        <TokenBox onChange={(_, newValue) => setToken(newValue ?? 0)} />
        <TextField
          label="Token Amount"
          sx={{ width: 300 }}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        <TextField
          label="Account Address"
          sx={{ width: 300 }}
          onChange={(e) => setAccountAddress(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Stack>
    </div>
  );
}

export default SendForm;
