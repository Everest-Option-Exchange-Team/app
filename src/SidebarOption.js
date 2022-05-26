import React from 'react';
import "./SidebarOption.css";

function SidebarOption( { Icon, title, selected, handleNavigate}) {
  
  return (
    <div onClick={() => {handleNavigate(); selected = true;}} className={`sidebarOption ${selected && "sidebarOption--active"}`}>
        <Icon />
        <h3>{title}</h3>
    </div>
  )
}

export default SidebarOption