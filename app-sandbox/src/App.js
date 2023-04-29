import React from "react";

import "./App.css";

import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";

import Home from "./pages/Home";
//import Sandbox from "./pages/Sandbox";
import AppBar from "./components/AppBar.tsx";

const walletProviders = initializeProviders([]);

function App() {
  // Reconnect the session when the user returns to the dApp
  React.useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);
  return (
    <WalletProvider value={walletProviders}>
      <div className="App">
        <AppBar />
        <Home />
      </div>
    </WalletProvider>
  );
}

export default App;
