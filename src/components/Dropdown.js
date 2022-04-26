import React, { useState } from "react";
import "./Dropdown.css";
import * as FaIcons from 'react-icons/fa';

function Dropdown({options }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Choose One")
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
       {selected}
       <span className={`dropdown-icon ${isActive ? 'rotate' : ''}`}>
       <FaIcons.FaCaretDown   />
       </span>
         
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options &&
            options.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(option.name); 
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
               <a href={option.url}> {option.name}</a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
