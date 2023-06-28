import { Stack } from "@mui/material";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { useCallback } from "react";
import { displayToken } from "../../utils/algorand.js";
function SendForm({ token, setToken, setTokenAmount, setAccountAddress }) {
  const [tokenOnce, setTokenOnce] = useState(Object.keys(token).length > 0);
  const onTokenChange = useCallback(
    (e, newValue) => {
      setToken(newValue?.props?.value ?? {}); // HACK
      setTokenOnce(true);
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
      <Stack spacing={tokenOnce ? 5 : 9}>
        <TokenInputBase
          token={token}
          onTokenAmountChange={onTokenAmountChange}
          onTokenChange={onTokenChange}
        />
        {token &&
          (token.amount && token.symbol ? (
            <Box>
              <Typography variant="body2">
                Available: {displayToken(token)}
              </Typography>
            </Box>
          ) : (
            tokenOnce && <Skeleton height="30" />
          ))}
        <TextInputBase onChange={onAccountAddressChange} label="Destination" />
        {/*<TokenBox onChange={onTokenChange} />*/}
      </Stack>
    </div>
  );
}

export default SendForm;
