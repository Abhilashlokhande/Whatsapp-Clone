import React,{useState} from "react";
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import contacts from './ContactData';


function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleContactClick = (contactId) => {
    setSelectedChatId(contactId);
  };
  
  return (
    <div className="app">
       <div className="app__body">
       <Sidebar  onContactClick={handleContactClick}/>
       <Chat selectedContactId={selectedChatId} contactsList={contacts}/>
       </div>
    </div>
  );
}

export default App;
