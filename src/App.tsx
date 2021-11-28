import React from 'react';

function App() {
  return (
    <div className="text-center mt-4">
      <div>
        <h3>Morse Code Translator</h3>
        <p>Translates ASCII text to Morse code and vice-versa</p>
      </div>

      <div className="w-full mt-8">
        <form>
          <input
            type="text"
            placeholder="testing tailwind"
            className="p-6 max-w-sm mx-auto bg-purple-100"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
