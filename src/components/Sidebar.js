import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Sidebar.css';
import {IconContext} from 'react-icons';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        { !sidebar&&
            <div className="sidebar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars color='#D81E5B' onClick={showSidebar} />
            </Link>
        </div>
        }
        <nav className={sidebar ? 'side-menu active' : 'side-menu'}>

            <ul className='side-menu-items' onClick={showSidebar}>
                <li className='sidebar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose color='#ffff' />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>

  );
}

export default Sidebar;
