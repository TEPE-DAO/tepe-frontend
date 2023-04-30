import { Stack, TextField } from "@mui/material";
import TokenBox from "../../components/TokenBox";
import { useCallback } from "react";
function SendForm({ setToken, setTokenAmount, setAccountAddress }) {
  const onTokenChange = useCallback(
    (_, newValue) => setToken(newValue ?? 0),
    [setToken]
  );
  const onTokenAmountChange = useCallback(
    (e) => setTokenAmount(e.target.value),
    [setTokenAmount]
  );
  const onAccountAddressChange = useCallback(
    (e) => setAccountAddress(e.target.value),
    [setAccountAddress]
  );
  return (
    <div className="SendForm">
      <Stack spacing={5}>
        <TokenBox onChange={onTokenChange} />
        <TextField
          label="Token Amount"
          sx={{ width: 300 }}
          onChange={onTokenAmountChange}
        />
        <TextField
          label="Account Address"
          sx={{ width: 300 }}
          onChange={onAccountAddressChange}
        />
      </Stack>
    </div>
  );
}

export default SendForm;
