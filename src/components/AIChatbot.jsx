import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your health assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Health-related responses
    if (lowerMessage.includes('symptom') || lowerMessage.includes('pain') || lowerMessage.includes('feel')) {
      return "I can help you understand your symptoms. Could you please provide more details about your symptoms, their duration, and any other relevant information?";
    }
    if (lowerMessage.includes('test') || lowerMessage.includes('lab')) {
      return "I can help you find appropriate medical tests. Please let me know what symptoms or conditions you're concerned about, and I'll suggest relevant tests.";
    }
    if (lowerMessage.includes('appointment') || lowerMessage.includes('doctor')) {
      return "I can help you book an appointment. Would you like to schedule a consultation with a doctor? Please specify your preferred specialty.";
    }
    if (lowerMessage.includes('medication') || lowerMessage.includes('medicine')) {
      return "I can provide general information about medications, but please note that I cannot prescribe medications. For specific medical advice, please consult your doctor.";
    }
    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
      return "If you're experiencing a medical emergency, please call emergency services immediately. I can provide general information but cannot handle emergencies.";
    }
    
    // General responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I assist you with your health concerns today?";
    }
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    
    // Default response
    return "I'm here to help with your health-related questions. Could you please provide more details about what you'd like to know?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(input),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[500px] flex flex-col">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Health Assistant</h2>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
              <span className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AIChatbot;
