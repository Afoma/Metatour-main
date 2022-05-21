import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {ClaimButton} from "../components/Claim";


function Home() {
  const desiredChainId = 5;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <div className="home">
        <ConnectButton />
        <h1 className="content">Meta Tour</h1>
        <p className="content">Let's take you on a tour around the metaverse.</p>
      </div>
      <ClaimButton />
    </ThirdwebProvider>
  );
}

export default Home;