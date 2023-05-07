import {
  FormControlLabel,
  InputBase,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import TokenBox from "../../components/TokenBox";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import { useCallback } from "react";
import { Label } from "@mui/icons-material";
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
        <TokenInputBase
          onTokenAmountChange={onTokenAmountChange}
          onTokenChange={onTokenChange}
        />
        <TextInputBase onChange={onAccountAddressChange} label="Destination" />
        {/*<TokenBox onChange={onTokenChange} />
        <TextField
          label="Token Amount"
          sx={{ width: 300 }}
          onChange={onTokenAmountChange}
        <TextField
          label="Account Address"
          sx={{ width: 300 }}
          onChange={onAccountAddressChange}
        />
  >*/}
      </Stack>
    </div>
  );
}

export default SendForm;
