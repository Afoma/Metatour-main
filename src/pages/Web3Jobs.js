import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";

function Web3Jobs () {
    const [options] = useState([
        {name: 'Cryptocurrency Jobs', url: 'https://cryptocurrencyjobs.co/'},
        {name: 'Crypto Jobs List', url: 'https://cryptojobslist.com/'},
        {name: 'Froog', url: 'https://froog.co/'},
        {name: 'Remote Web3 Jobs', url: 'https://remote3.co/'},
        {name: 'Web3 Hire Me', url: 'https://www.web3hire.me/'},
        {name: 'Web3 Jobs', url: 'https://web3.career/'},
        {name: 'Web3 Work', url: 'https://twitter.com/web3_work/header_photo'},
        {name: 'Work on Block', url: 'https://www.workonblock.com/#jobs'}
    ])
    return(
        <div>
            <h1 className="content">Web3 Jobs</h1>
            <Dropdown 
            options= {options} />
        </div>
    );
}

export default Web3Jobs;