import { ALGO_MakeWalletConnect, loadStdlib } from "@reach-sh/stdlib";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";

export const makeStdLib = () => {
  const networkEnv = "ALGO-live";
  const networkProvider = "testnet";
  const stdlib = loadStdlib({
    REACH_CONNECTOR_MODE: networkEnv,
    //REACH_DEBUG: "1",
    REACH_NO_WARN: "1",
  });
  const providerEnv = {
    ALGO_TOKEN: "",
    ALGO_SERVER: `https://${networkProvider}-api.algonode.cloud`,
    ALGO_PORT: "",
    ALGO_NODE_WRITE_ONLY: "no",

    ALGO_INDEXER_TOKEN: "",
    ALGO_INDEXER_SERVER: `https://${networkProvider}-idx.algonode.cloud`,
    ALGO_INDEXER_PORT: "",
  };
  stdlib.setWalletFallback(
    stdlib.walletFallback({
      providerEnv,
      WalletConnect: ALGO_MakeWalletConnect(WalletConnect, QRCodeModal),
    })
  );

  return stdlib;
};
