import React from 'react';
import Posts from './components/Posts';

const App = () => {
  return (
    <div className="w-screen h-full min-h-screen p-10 bg-gray-100 text-slate-700">
      <h2 className="max-w-md mx-auto text-center text-2xl font-bold">RTK Query</h2>


      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Posts />
      </div>

    </div>

  );
};

export default App;
