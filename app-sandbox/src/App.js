import React from "react";

import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";

import Home from "./pages/Sandbox";

const walletProviders = initializeProviders([]);

function App() {
  // Reconnect the session when the user returns to the dApp
  React.useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);
  return (
    <div className="App">
      <WalletProvider value={walletProviders}>
        <Home />
      </WalletProvider>
    </div>
  );
}

export default App;
