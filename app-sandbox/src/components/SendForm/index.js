import { Stack } from "@mui/material";
import TokenBox from "../../components/TokenBox";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import { useCallback } from "react";
function SendForm({ setToken, setTokenAmount, setAccountAddress }) {
  const onTokenChange = useCallback(
    (e, newValue) => {
      setToken(newValue?.props?.value ?? {}); // HACK
    },
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
        {/*<TokenBox onChange={onTokenChange} />*/}
      </Stack>
    </div>
  );
}

export default SendForm;
