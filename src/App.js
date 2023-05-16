import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Frame1 from './views/Frame1'
import Frame from './views/Frame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route component={Frame1} exact path="/" /> */}
        <Route exact path="/" element={<Frame />} />
        <Route exact path="/f" element={<Frame1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
