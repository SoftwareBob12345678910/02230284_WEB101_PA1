"use client";
import React from "react";
import Avatar from "./Avatar";
import messageData from "./messageData";

const ChatList = ({ searchQuery, selectedChat, onChatSelect, splitView }) => {
  const filteredMessages = messageData.filter((message) =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`bg-white h-screen ${splitView ? "w-1/3 border-r" : "w-full"}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-semibold">Messenger</h1>
        <button className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className="p-2 border-b">
        <div className="bg-gray-100 rounded-full flex items-center px-3 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search for people and groups"
            className="bg-transparent border-none focus:outline-none ml-2 w-full text-sm"
            value={searchQuery}
            onChange={(e) => onChatSelect.handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto" style={{ height: "calc(100vh - 116px)" }}>
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer ${
              selectedChat?.id === message.id ? "bg-blue-50" : ""
            }`}
            onClick={() => onChatSelect.handleChatSelect(message)}
          >
            <Avatar name={message.name} isOnline={message.isOnline} imageUrl={message.avatarUrl} />
            <div className="ml-3 flex-1 overflow-hidden">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-sm text-gray-900 truncate">{message.name}</h3>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{message.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;