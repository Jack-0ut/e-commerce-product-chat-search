'use client';
import React, { useState } from 'react';
import ChatInput from '@/components/ChatInput';
import ProductGrid from './ProductGrid';
import Product from '@/models/Product';

interface Message {
  text: string;
  isUser: boolean;
}

interface ProductMessage extends Message {
  recommended_products: Product[];
}
const ChatMessage: React.FC<Message> = ({ text, isUser }) => {
  const messageClass = isUser ? 'user-message' : 'bot-message';
  const backgroundColor = isUser ? 'bg-yellow-200' : 'bg-green-200';

  return (
    <div className={`message ${messageClass}`}>
      <div className={`flex items-end ${isUser ? 'flex-row-reverse' : ''}`}>
        <div
          className={`w-auto max-w-xl break-words ${backgroundColor} rounded-xl text-cool-gray p-2 shadow-md shadow-gray-light/40 border border-gray-light/40 ${
            isUser ? 'user-message-elevation' : 'shadow-md shadow-gray-dark/30'
          }`}
        >
          <span className="text-black">{text}</span>
        </div>
      </div>
    </div>
  );
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<(Message | ProductMessage)[]>([]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      text: message,
      isUser: true,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate a delay before adding a dummy response
    setTimeout(() => {
      const dummyMessage: ProductMessage = {
        text: 'This is a dummy response.',
        isUser: false,
        recommended_products: [
          {
            id: 1,
            name: "Air Force 1 '07",
            image: "https://originalstore.com.ua/6140-large_default/krosivki-nike-air-force-1-07-lv8-dv0789-100.jpg",
            price: 99.99,
            discount: 10,
          },
          {
            id: 2,
            name: "Air Jordan 1 Retro High OG",
            image: "https://werare.com.ua/image/catalog/i/aa/hp/b921bc8ad62958e7db1a1a05203a67b4.jpg",
            price: 159.99,
            discount: 15,
          },
        ],
      };

      setMessages(prevMessages => [...prevMessages, dummyMessage]);
    }, 1000);
  };

  return (
<div className="chat-interface rounded-lg shadow-md border border-pink-100 max-w-[1280px] mx-auto h-[440px] flex flex-col">
  <div className="chat-messages p-4 flex-1 overflow-y-auto">
    {/* Messages content */}
    {messages.map((message, index) => (
      <div key={index} className={`chat-message mb-4 ${message.isUser ? '' : 'flex-row-reverse'}`}>
        <ChatMessage text={message.text} isUser={message.isUser} />
        {('recommended_products' in message) && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <ProductGrid products={(message as ProductMessage).recommended_products} />
          </div>
        )}
      </div>
    ))}
  </div>
  <ChatInput onSendMessage={handleSendMessage} />
</div>

  );
};

export default ChatInterface;
