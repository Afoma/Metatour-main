import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";

function Web3Grants () {
    const [options] = useState([
        {name: 'Arweave', url: 'https://www.arweave.org/get-involved/investment-funding'},
        {name: 'Aurora', url: 'https://aurora.dev/grants'},
        {name: 'Celo', url:'https://celo.org/experience/grants#introduction'},
        {name: 'Chainlink', url: 'https://chain.link/community/grants'},
        {name: 'Ethereum', url: 'https://ethereum.org/en/community/grants/'},
        {name: 'Gitcoin', url: 'https://gitcoin.co/'},
        {name: 'Harmony', url: 'https://open.harmony.one/300m-on-bounties-grants-daos/apply-for-grants-or-dao'},
        {name: 'Interchain', url: 'https://interchain.io/funding/'},
        {name: 'Livepeer', url: 'https://github.com/livepeer/Grant-Program'},
        {name: 'Near', url: 'https://near.org/grants/'},
        {name: 'Radicle', url: 'https://radicle.mirror.xyz/7RDTvdxABVndpZge9VT09Ku5JXD8lCCCpLRRZaVrtJU'},
        {name: 'Rally', url: 'https://forum.rally.io/t/guide-how-to-submit-a-funding-proposal/1407'},
        {name: 'Solana', url: 'https://solana.foundation/grants'},
        {name: 'Tezos', url: 'https://tezos.foundation/grants/'},
        {name: 'The Graph', url: 'https://thegraph.com/blog/wave-four-grants'},
    ])
    return (
        <div>
            <h1 className="content">Web3 Grants</h1>
            <Dropdown 
            options= {options}
            />
        </div>
    );
}

export default Web3Grants;