import React from 'react';
import "./SidebarOption.css";
import { useSelector } from "react-redux";


function SidebarOption( { Icon, title, id}) {
  const page = useSelector(state => state.page);
  
  return (
    <div className={`sidebarOption ${page.currentPage===id} && "sidebarOption--active"}`}>
        <Icon />
        <h3>{title}</h3>
    </div>
  )
}

export default SidebarOption