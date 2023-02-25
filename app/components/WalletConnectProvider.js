import { Wallet, WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

export const WalletConnectProvider = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => {
    if (network == WalletAdapterNetwork.Devnet) {
      return "https://smart-smart-pond.solana-devnet.discover.quiknode.pro/b2c9040b5db2e648f348fe35df5ff1d4d8603d62/";
    }

    return clusterApiUrl(network);
  }, [network]);

  const wallets = useMemo(() => {
    return [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new GlowWalletAdapter(),
    ];
  }, [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
    </ConnectionProvider>
  );
};
