import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";

function DAOs() {
   const [options] = useState([
    {name: 'BFF DAO', url: 'https://twitter.com/MyBFF'},
    {name: 'Blu3 DAO', url: 'https://twitter.com/blu3dao'},
    {name: 'Boys Club Crypto DAO', url: 'https://twitter.com/BoysClubCrypto'},
    {name: 'Buildspace DAO', url: 'https://twitter.com/_buildspace'},
    {name: 'Constitution DAO', url: 'https://twitter.com/ConstitutionDAO'},
    {name: 'Crypto Besties DAO', url: 'https://twitter.com/cryptobesties'},
    {name: 'Data Union DAO', url: 'https://twitter.com/dataunions'},
    {name: 'Decentology DAO', url: 'https://twitter.com/Decentology'},
    {name: 'Developer DAO', url: 'https://twitter.com/developer_dao'},
    {name: 'Dream DAO', url: 'https://twitter.com/DreamDAO_'},
    {name: 'Dropout DAO', url: 'https://twitter.com/dropout_dao'},
    {name: 'Friends WIth Benefits DAO', url: 'https://twitter.com/FWBtweets'},
    {name: 'H.E.R. DAO', url: 'https://twitter.com/_HerDAO'},
    {name: 'Her House DAO', url: 'https://twitter.com/herhouse_io'},
    {name: 'Komorebi Fund DAO', url: 'https://twitter.com/KomorebiFund'},
    {name: 'Learn Web3 DAO', url: 'https://learnweb3.com'},
    {name: 'Odyssey DAO', url: 'https://twitter.com/odyssey_dao'},
    {name: 'Pleasr DAO', url: 'https://twitter.com/PleasrDAO'},
    {name: 'Seed Club DAO', url: 'https://twitter.com/seedclubhq'},
    {name: 'Sigle DAO', url: 'https://learnweb3.com'},
    {name: 'Syndicate DAO', url: 'https://twitter.com/SyndicateDAO'},
    {name: 'Vector DAO', url: 'https://twitter.com/VectorDAO'},
    {name: 'We3 DAO', url: 'https://twitter.com/hello_we3'},
    {name: 'Web3 baddies', url: 'https://twitter.com/web3baddies'},
    {name: 'Web3 Ladies', url: 'https://twitter.com/web3ladies'},
    {name: 'Women Build Web3 DAO', url: 'https://twitter.com/womenbuildweb3'},
    {name: 'Women In NFTs', url: 'https://twitter.com/womeninnfts'},
    {name: 'Women Web3 DAO', url: 'https://twitter.com/_WomenWeb3'}
    ])
  return (
    <div className='daos'>
        <Dropdown 
          options={options}
        />
    </div>
  );
}

export default DAOs;
