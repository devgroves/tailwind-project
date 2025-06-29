import React from 'react';

const App: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Welcome to My Web Page</h1>
            <p>This is a simple HTML page.</p>
            <p>Feel free to explore and learn more about HTML!</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Click Me
            </button>
        </div>
    );
}

export default App;