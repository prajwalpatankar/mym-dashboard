import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frame from './views/Frame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Frame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
