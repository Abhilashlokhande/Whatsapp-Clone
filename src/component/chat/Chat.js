import React from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

const Chat = ({selectedContactId, contactsList}) => {
    
    const selectedContact = contactsList.find((contacts) => contacts.id === selectedContactId);
    console.log("selectedContactId:", selectedContactId);
  console.log("contacts:", contactsList);
   
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        {selectedContact ? (
            <div className="chat__headerInfo">
          <h3>{selectedContact.name}</h3>
        </div>
        ) : ("please select chat to display here")}
        
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message chat__reciever">
        <span className="chat__name">Abhi</span>
        Hello
        <span className="chat__Time">5:02pm</span>
        </p>        
      </div>
      <div className="chat__footer">
      <InsertEmoticonIcon/>
      <form>
      <input placeholder="type a message" type="text"/>
      <button><SendIcon/></button>
      </form>
      <MicIcon className="Mic"/>
      </div>
    </div>
  );
};

export default Chat;
