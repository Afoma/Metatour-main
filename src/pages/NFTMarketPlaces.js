import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';


function NFTMarketPlaces() {
  const [options] = useState([
    { name: "Learnweb3", url: "https://learnweb3.com" },
    { name: "Moralis", url: "https://learnweb3.com" },
    { name: "Rabbithole", url: "https://learnweb3.com" },
  ]);

  return (
  <div className='nftmarketplaces'>
    <Dropdown options={options} />
  </div>
  );
}

export default NFTMarketPlaces;
