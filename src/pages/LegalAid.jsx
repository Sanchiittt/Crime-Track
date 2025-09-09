import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const LegalAid = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "This is a simulated legal aid response.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-col px-6 md:px-20 py-20 gap-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Legal Aid Chat
        </h1>

        {/* Chat Box */}
        <div className="bg-black/70 backdrop-blur-md rounded-xl shadow-2xl p-6 flex flex-col h-[500px] overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-xl ${
                msg.sender === "bot"
                  ? "bg-gray-800 text-gray-200 self-start"
                  : "bg-blue-700 text-white self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your query..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-lg font-semibold transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalAid;
