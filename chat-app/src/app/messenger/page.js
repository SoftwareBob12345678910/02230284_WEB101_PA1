"use client";
import React, { useState } from "react";
import ChatList from "../components/ChatList";
import ChatView from "../components/ChatView";
import LoadingScreen from "../components/LoadingScreen";

const MessengerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [splitView, setSplitView] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSend = () => {
    if (text.trim() === "") return;
    const updatedMessages = [
      ...selectedChat.messages, 
      { id: selectedChat.messages.length + 1, text, sender: "user" }
    ];
    setSelectedChat({ ...selectedChat, messages: updatedMessages });
    setText("");
  };

  const handleChatSelect = (chat) => {
    setLoading(true);
    setSelectedChat(chat);
    
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
      setSplitView(true);
    }, 2000);
  };

  const handleBack = () => {
    setSplitView(false);
    setSelectedChat(null);
  };

  // Chat list event handlers
  const chatListHandlers = {
    handleSearch,
    handleChatSelect
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatList 
        searchQuery={searchQuery} 
        selectedChat={selectedChat} 
        onChatSelect={chatListHandlers} 
        splitView={splitView}
      />
      {(selectedChat && splitView) && (
        <ChatView 
          selectedChat={selectedChat} 
          text={text} 
          setText={setText} 
          handleSend={handleSend} 
          handleBack={handleBack} 
          splitView={splitView}
        />
      )}
    </div>
  );
};

export default MessengerPage;