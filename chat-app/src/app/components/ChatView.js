"use client";
import React from "react";
import Avatar from "./Avatar";
import { FiPlus, FiPhone, FiVideo, FiInfo, FiThumbsUp, FiSmile, FiCamera, FiPaperclip } from "react-icons/fi";

const ChatView = ({ selectedChat, text, setText, handleSend, handleBack, splitView }) => {
  if (!selectedChat) return null;

  return (
    <div className={`flex flex-col h-screen bg-white ${splitView ? "w-2/3" : "w-full"}`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
        <div className="flex items-center">
          {!splitView && (
            <button onClick={handleBack} className="mr-3 text-blue-500 text-lg">
              ←
            </button>
          )}
          <Avatar name={selectedChat.name} isOnline={selectedChat.isOnline} imageUrl={selectedChat.avatarUrl} />
          <div className="ml-3">
            <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
            <p className="text-sm text-gray-500">{selectedChat.status}</p>
          </div>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <FiPlus className="text-xl cursor-pointer" />
          <FiPhone className="text-xl cursor-pointer" />
          <FiVideo className="text-xl cursor-pointer" />
          <FiInfo className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="flex flex-col space-y-3">
          {selectedChat.messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-2xl max-w-xs ${
                msg.sender === "user" 
                  ? "bg-blue-500 text-white rounded-br-none" 
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Reactions */}
      {selectedChat.id === 1 && (
        <div className="flex p-2 bg-white border-t">
          <div className="flex space-x-2 text-gray-500">
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">Sad</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">😊</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">❤️</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">😮</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">😂</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">😡</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">Yes 👍</span>
            <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">Oh</span>
          </div>
        </div>
      )}

      {/* Chat Input */}
      <div className="p-3 border-t flex items-center">
        <div className="flex space-x-2 mr-2">
          <FiPlus className="text-xl text-gray-600 cursor-pointer" />
          <FiCamera className="text-xl text-gray-600 cursor-pointer" />
          <FiPaperclip className="text-xl text-gray-600 cursor-pointer" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <div className="flex space-x-2 ml-2">
          <FiSmile className="text-xl text-gray-600 cursor-pointer" />
          <FiThumbsUp className="text-xl text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatView;