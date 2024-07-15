'use client';
import React, { useState } from 'react';
import { Send } from 'react-feather';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="flex items-center mx-auto w-3/5 p-0" 
    >
    <div className="input-container relative flex items-center w-full border border-gray-300 border-b-0 bg-gray-100 p-2 rounded-tl-3xl rounded-tr-3xl">
      <textarea
          id="user-input"
          placeholder="Type your message..."
          className="input-field flex-grow px-2 p-0 bg-transparent text-base outline-none resize-none min-h-[50px] "
          value={inputText}
          onChange={handleInputChange}
        />

        <div
          className="send-button flex items-center justify-center bg-purple-pastel-dark text-white rounded-full p-2 mr-2 cursor-pointer"
          onClick={handleSendMessage} >
          <Send className="send-icon" color="black" />
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
