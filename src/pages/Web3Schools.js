import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function Web3Schools() {
  const [options] = useState([
    { name: "Learnweb3", url: "https://learnweb3.com" },
    { name: "Moralis", url: "https://learnweb3.com" },
    { name: "Rabbithole", url: "https://learnweb3.com" },
  ]);

  return (
    <div className="web3schools">
      <h1 className="content">Web3 Schools</h1>

      <Dropdown options={options} />
    </div>
  );
}

export default Web3Schools;
