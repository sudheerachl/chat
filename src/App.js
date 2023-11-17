import React from 'react';

import Chat from './components/chat.js';
import Join from './components/join.js';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
function App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
