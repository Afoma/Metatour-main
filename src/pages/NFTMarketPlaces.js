import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';


function NFTMarketPlaces() {
  const [options] = useState([
    { name: "Open sea", url: "https://opensea.io/" },
    { name: "Rarible", url: "https://rarible.com/" },
    { name: "Mintable", url: "https://mintable.app/" },
    { name: "Super rare", url: "https://superrare.com/" },
  ]);

  return (
  <div className='nftmarketplaces'>
    <h1 className="content">NFT Marketplaces</h1>
    <Dropdown 
    options={options} 
    />
  </div>

  );
}

export default NFTMarketPlaces;
