import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";

function DAOs() {
   const [options] = useState([
    {name:'Learnweb3', url: 'https://learnweb3.com'},
    {name:'Developer Dao', url: 'https://learnweb3.com'},
    {name:'Sigle', url: 'https://learnweb3.com'},
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
