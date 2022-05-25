import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";

export const ClaimButton = () => {
  const connectWithMetamask = useMetamask();
  const nftDrop = useNFTDrop("0xA9F8815255E2fDC1CB2E164dE1bEedfD815D421B");
  const address = useAddress();
  return (
    <div style=
      {{
        textAlign: "right",
      }}>
      {address ? (
        <button style={{
          backgroundColor: "#D81E5B",
          width: "100px",
          height: "50px",
          textAlign: "center",
          borderRadius: "10%",
  }
  }
        onClick={() => nftDrop?.claim(1)}>Claim 1</button>
      ) : (
            <button style={{
                backgroundColor: "#D81E5B",
                width: "100px",
                height: "50px",
                textAlign: "center",
                borderRadius: "10%",
        }
        }
         onClick={connectWithMetamask}>Claim NFT</button>

 )}
    </div>
  );
};