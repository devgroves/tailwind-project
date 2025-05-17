import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there! How are you?', sender: 'other', time: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, text: "I'm doing great! Just working on some new projects.", sender: 'me', time: '10:32 AM' },
    { id: 3, text: 'That sounds interesting. What kind of projects?', sender: 'other', time: '10:33 AM', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 4, text: 'Mostly web development with React and Tailwind CSS.', sender: 'me', time: '10:35 AM' },
    { id: 5, text: 'Nice! I love working with Tailwind. It makes styling so much easier.', sender: 'other', time: '10:36 AM', avatar: 'https://i.pravatar.cc/150?img=5' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <img 
            src="https://i.pravatar.cc/150?img=5" 
            alt="Profile" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold">Sarah Johnson</h2>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-3">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'other' && (
                <img 
                  src={message.avatar} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
              )}
              <div className={`max-w-xs lg:max-w-md ${message.sender === 'me' ? 'ml-2' : 'mr-2'}`}>
                <div 
                  className={`p-3 rounded-lg ${message.sender === 'me' 
                    ? 'bg-blue-500 text-white rounded-br-none' 
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="bg-white p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;