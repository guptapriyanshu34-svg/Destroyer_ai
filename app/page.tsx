'use client';
import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';

export default function DestroyerAI() {
  const [liveUsers, setLiveUsers] = useState(247);
  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    api: '/api/chat',
  });

  // Fake Counter Logic (200-300 range)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(Math.floor(Math.random() * (300 - 200 + 1)) + 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-500 font-mono p-4 flex flex-col">
      {/* Top Header */}
      <div className="border-b-2 border-red-900 pb-2 mb-4 flex justify-between items-center">
        <h1 className="text-3xl font-black tracking-tighter italic">DESTROYER_AI</h1>
        <div className="flex flex-col items-end">
          <span className="text-xs text-white animate-pulse">● LIVE USERS: {liveUsers}</span>
          <span className="text-[10px] text-gray-500">TG: @Legend11587ai</span>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-20 scrollbar-hide">
        {messages.map(m => (
          <div key={m.id} className={`p-3 rounded border ${m.role === 'user' ? 'border-zinc-800 bg-zinc-900' : 'border-red-900 bg-black text-white'}`}>
            <span className="block text-[10px] font-bold uppercase mb-1">{m.role === 'user' ? 'User' : 'Destroyer'}</span>
            {m.content}
          </div>
        ))}
        {error && (
          <div className="bg-red-900 text-white p-4 text-center rounded">
            TRIAL EXPIRED! Buy Key for ₹100/Day. <br/>
            Contact Admin: <a href="https://t.me/Legend11587ai" className="underline font-bold">@Legend11587ai</a>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-black border-t border-red-900">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 bg-zinc-900 border border-red-600 p-3 text-white focus:outline-none"
            value={input}
            placeholder="Describe your problem..."
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-red-700 text-white px-6 py-2 font-bold hover:bg-red-500">SEND</button>
        </form>
        <p className="text-[10px] text-center mt-2 text-zinc-500 uppercase">Unrestricted Problem Solving Interface</p>
      </div>
    </div>
  );
}

