import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function Web3Schools() {
  const [options] = useState([
    { name: "Alchemy", url: "https://www.alchemy.com/"},
    { name: "Buildspace", url: "https://buildspace.so/"},
    { name: "Cryptozombies", url: "https://cryptozombies.io/"},
    { name: "Ethereum", url: "https://ethereum.org/en/"},
    { name: "Learn Web3", url: "https://learnweb3.com" },
    { name: "Moralis", url: "https://moralis.io/" },
    { name: "Odyssey", url: "https://www.odysseydao.com/"},
    { name: "Pointer", url: "https://www.pointer.gg/"},
    { name: "Rabbithole", url: "https://rabbithole.gg/" },
    { name: "UseWeb3", url: "https://www.useweb3.xyz/"},
    { name: "Web3 Hashnode", url: "https://web3.hashnode.com/"},
    { name: "Web3 University", url: "https://www.web3.university/"},

  ]);

  return (
    <div className="web3schools">
      <h1 className="content">Web3 Schools</h1>

      <Dropdown options={options} />
    </div>
  );
}

export default Web3Schools;
