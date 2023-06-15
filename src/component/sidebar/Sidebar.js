import React from "react";
import "./sidebar.css";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SidebarChat from "../sidebarchat/SidebarChat";
import GroupsIcon from '@mui/icons-material/Groups';
import contacts from "../../ContactData";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
        <IconButton>
        <GroupsIcon/>
        </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchcontainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chat">
      <SidebarChat contacts={contacts}/> 
      </div>
    </div>
  );
};

export default Sidebar;
