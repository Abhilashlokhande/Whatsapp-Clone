import React from 'react';
import './sidebarchat.css'; 
import { Avatar } from '@mui/material';

const SidebarChat = ({contacts, onContactClick}) => {
  const handleClick = (contactId) => {
    onContactClick(contactId);
  };
  return  (
    <>
    {contacts.map((contact)=>{
      return(
        <>   
        <div className='sidebarchat'>
        <Avatar/>
        <div className='sidebarchat__info' onClick={() => handleClick(contact.id)}>
        <h2>{contact.name}</h2>
        <p>{contact.message}</p>
        </div>
      </div>       
        </>
      )
    })}
   
  </>
 )
  
}

export default SidebarChat
